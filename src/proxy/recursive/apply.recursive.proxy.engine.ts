import {ParamsProxyEngineInterface,} from '../../interfaces/engine/proxy/params.proxy.engine.interface';
import {InstanceofMethod} from '../../methods/instanceof.method';
import {CommandMixType, CommandType} from '../../types/commands.type';

export function proxyRecursiveApply(params: ParamsProxyEngineInterface): ReturnType<any> {
  return (notUsedTargetApply: any, thisArg: unknown, argumentList: unknown[] | unknown[][]): boolean => {
    try {
      return convertStringListToDecideList(params.commandList, argumentList);
    } catch (e) {
      if (InstanceofMethod(e, SyntaxError)) {
        throw e;
      }
      return false;
    }
  };
}

function findInGlobalContext(command: string): string | CommandType {
  if (Reflect.has(globalThis ?? {}, command)) {
    if (typeof (globalThis as any)[command] === 'function') {
      return (globalThis as any)[command];
    }
  }

  if (Reflect.has(self ?? {}, command)) {
    if (typeof (self as any)[command] === 'function') {
      return (self as any)[command];
    }
  }

  if (Reflect.has(window ?? {}, command)) {
    if (typeof (window as any)[command] === 'function') {
      return (window as any)[command];
    }
  }

  if (Reflect.has(global ?? {}, command)) {
    if (typeof (global as any)[command] === 'function') {
      return (global as any)[command];
    }
  }
  return command;
}

function getResult(command: CommandType | string, argumentList: unknown[], context: any = {}): boolean {
  if (typeof command === 'string') {
    command = findInGlobalContext(command);
    return typeof command === 'string'
      ? false
      : InstanceofMethod.apply({}, [argumentList[0], command as unknown as any]);
  } else {
    const result: any = command.apply(context, argumentList);
    if (typeof result === 'boolean') {
      return result;
    } else {
      return InstanceofMethod.apply({}, [argumentList[0], result.classRef]);
    }
  }
}

function convertStringListToDecideList(
  list: ParamsProxyEngineInterface['commandList'],
  argumentList: unknown[],
): boolean {
  const lastCommand = list.pop() as CommandMixType;
  let context: any = {};

  // Config variables of initialize data
  switch (lastCommand) {
    case 'apply':
      context = argumentList[0];
      argumentList = argumentList[1] as unknown[];
      break;
    case 'call':
      context = argumentList.shift();
      break;
    case 'bind':
      // TODO in this way need return Function with given context
      throw new SyntaxError(
        'Please don`t use bind with package, in future we will try to fix it, but not now. If you how to fix it, please create issue or fork flow.',
      );
    default:
      list.push(lastCommand);
  }

  let indexNot: number = -1;
  let result: boolean;

  for (let index = 0; index < list.length; index++) {
    // Find "not" in array
    if (list[index] === 'not') {
      if (indexNot < 0) { // Check if indexNot was found
        indexNot = index;
      } else { // Found more than one "not"
        throw new Error('Please, use only one "not"');
      }
    } else {
      /**
       * Examples:
       * 1. [v] is.object()
       * 2. [v] is.not.object()
       * 3. [v] is.object.empty()
       * 4. [v] is.object.or.string()
       * 5. [v] is.not.object.or.string()
       * 6. [v] is.object.not.empty.or.null({a: 1})
       * 7. [v] is.null.or.undefined.or.empty()
       * 8. [v] is.object.or.string.not.empty()
       */

      result = getResult(list[index], argumentList, context);
      if (list.length - 1 === index) { // Is last interaction
        // Negative cases for examples #1 and #2.
        // And
        // Success cases for examples: #1, #2, #3.
        return indexNot < 0 ? result : !result;
      } else {
        // Negative case for example #3.
        if (list[index + 1] === 'or') {
          // If we have "not" before "or" then we need to have only one negative result
          // If we don't have "not" before "or" then we need to have only one positive
          if (indexNot < 0) { // Not found "not"
            indexNot = list.indexOf('not', index + 3);
            if (result) {
              if (indexNot < 0) { // Not found "not"
                return true;
              } else { // Found "not"
                // Continue but now the index is next to indexNot.
                index = indexNot;
              }
            } else {
              // Continue but now the index is +2, for example #7 is now on the "undefined" method, on the next step is
              // "empty" command (if value is: 1 or {a: 1})
              index = index + 1;
            }
          } else { // Found "not"
            if (result) {
              return false;
            } else {
              // Example #5
              index = index + 1;
            }
          }
        } else {
          // If "not" not found and result is false
          if (indexNot < 0) {
            if (result) {
              indexNot = list.indexOf('not', index + 1);
              if (indexNot >= 0) {
                // Example #6
                index = indexNot;
              }
            } else {
              return false;
            }
          }
        }
      }
    }
  }
  return true;
}

