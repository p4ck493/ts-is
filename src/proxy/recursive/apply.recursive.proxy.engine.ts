import {ParamsProxyEngineInterface} from '../../interfaces/engine/proxy/params.proxy.engine.interface';
import {InstanceofMethod} from '../../methods/instanceof.method';
import {CommandMixType, CommandType} from '../../types/commands.type';

export function proxyRecursiveApply(params: ParamsProxyEngineInterface): ReturnType<any> {
    return (notUsedTargetApply: any, thisArg: unknown, argumentList: unknown[] | unknown[][]): boolean => {
        try {
            return getDecide(params.commandList, argumentList);
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
        if (typeof globalThis[command] === 'function') {
            return globalThis[command];
        }
    }
    if (Reflect.has(self ?? {}, command)) {
        if (typeof self[command] === 'function') {
            return self[command];
        }
    }
    if (Reflect.has(window ?? {}, command)) {
        if (typeof window[command] === 'function') {
            return window[command];
        }
    }
    if (Reflect.has(global ?? {}, command)) {
        if (typeof global[command] === 'function') {
            return global[command];
        }
    }
    return command;
}

function getResult(command: CommandType | string, argumentList: unknown[], context: any = {}): boolean {
    if (typeof command === 'string') {
        command = findInGlobalContext(command);
        if (typeof command === 'string') {
            return false;
        }
    } else {
        const result: any = command.apply(context, argumentList);
        if (typeof result === 'boolean') {
            return result;
        } else {
            command = result.classRef;
        }
    }
    return InstanceofMethod.apply({}, [argumentList[0], command as unknown as any]);
}

function getDecide(list: ParamsProxyEngineInterface['commandList'], argumentList: unknown[]): boolean {
    const lastCommand = list.pop() as CommandMixType;
    let context: any = {};

    const indexNot: number = list.indexOf('not');
    const foundIndexNot: boolean = indexNot > -1;
    let result: boolean;

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

    for (let index = 0; index < list.length; index++) {
        if (indexNot === index) {
            continue;
        }
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
        if (list.length - 1 === index) {
            // Is last interaction
            // Negative cases for examples #1 and #2.
            // And
            // Success cases for examples: #1, #2, #3.
            return foundIndexNot && index > indexNot ? !result : result;
        } else {
            // Negative case for example #3.
            if (list[index + 1] === 'or') {
                // If we have "not" before "or" then we need to have only one negative result
                // If we don't have "not" before "or" then we need to have only one positive
                if (result) {
                    if (foundIndexNot) {
                        if (index > indexNot) {
                            return false;
                        } else {
                            index = indexNot;
                        }
                    } else {
                        return true;
                    }
                } else {
                    index = index + 1;
                }
            } else {
                if (result) {
                    if (foundIndexNot) {
                        // Example #6
                        index = indexNot;
                    }
                } else {
                    return false;
                }
            }
        }
    }
    return true;
}
