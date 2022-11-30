import {
  CommandMixType,
  CommandType,
  ParamsProxyEngineInterface,
} from '../../../interfaces/engine/proxy/params.proxy.engine.interface';
import { InstanceofMethod } from '../../methods/instanceof.method';
import { BooleanMethod } from '../../methods/boolean.method';

type proxyRecursiveApplyType = (
  notUsedTargetApply: any,
  thisArg: unknown,
  argumentList: unknown[] & unknown[][],
) => ReturnType<typeof notUsedTargetApply>;

export function proxyRecursiveApply(params: ParamsProxyEngineInterface): proxyRecursiveApplyType {
  return (notUsedTargetApply, thisArg, argumentList): boolean => {
    try {
      const lastCommand = params.commandList.pop() as CommandMixType;

      switch (lastCommand) {
        case 'apply':
          argumentList = argumentList[1] as any;
          break;
        case 'call':
          argumentList.splice(0, 1);
          break;
        default:
          params.commandList.push(lastCommand);
      }

      return decideResult(convertStringListToDecideList(params.commandList, argumentList));
    } catch (e) {
      return false;
    }
  };
}

function getResult(command: CommandType | string, argumentList: unknown[]): boolean {
  if (typeof command === 'string') {
    if (Reflect.has(globalThis ?? {}, command)) {
      if (typeof (globalThis as any)[command] === 'function') {
        return InstanceofMethod.apply({}, [argumentList[0], (globalThis as any)[command]]);
      }
    }

    if (Reflect.has(window ?? {}, command)) {
      if (typeof (window as any)[command] === 'function') {
        return InstanceofMethod.apply({}, [argumentList[0], (window as any)[command]]);
      }
    }

    return false;
  } else {
    const result: any = command.apply({}, argumentList);
    if (BooleanMethod(result)) {
      return result;
    } else {
      return InstanceofMethod.apply({}, [argumentList[0], result.classRef]);
    }
  }
}

type convertResultType = {
  list: (boolean | number | boolean[])[];
  indexNot: number | undefined;
};

function convertStringListToDecideList(
  list: ParamsProxyEngineInterface['commandList'],
  argumentList: any,
): convertResultType {
  const convertResult: convertResultType = {
    list: [],
    indexNot: undefined,
  };
  for (let i = 0; i < list.length; i++) {
    switch (list[i]) {
      case 'not':
        convertResult.indexNot = convertResult.list.push(0) - 1;
        continue;
      case 'or':
        const lastItem: boolean | number | boolean[] | undefined = convertResult.list.at(-1);
        const result: boolean = getResult(list[i + 1], argumentList);
        if (Array.isArray(lastItem)) {
          lastItem.push(result);
        } else {
          convertResult.list[convertResult.list.length - 1] = [lastItem as boolean, result];
        }
        i++;
        continue;
      default:
        convertResult.list.push(getResult(list[i], argumentList));
    }
  }
  return convertResult;
}

function decideResult({ list, indexNot }: convertResultType): boolean {
  let index = 0;
  let result = false;

  for (let curr of list) {
    if (indexNot !== index) {
      if (Array.isArray(curr)) {
        curr = curr.some((t) => t);
      }
      if (typeof indexNot === 'number' && index > indexNot && indexNot > -1) {
        curr = !curr;
      }
      if (typeof curr === 'boolean') {
        if (curr) {
          result = curr;
        } else {
          return false;
        }
      }
    }
    index++;
  }
  return result;
}
