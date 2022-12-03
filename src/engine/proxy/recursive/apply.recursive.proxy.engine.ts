import {
    CommandMixType,
    CommandType,
    ParamsProxyEngineInterface,
} from '../../../interfaces/engine/proxy/params.proxy.engine.interface';
import {InstanceofMethod} from '../../methods/instanceof.method';
import {BooleanMethod} from '../../methods/boolean.method';
import {StringMethod} from '../../methods/string.method';

export function proxyRecursiveApply(params: ParamsProxyEngineInterface): ReturnType<any> {
    return (notUsedTargetApply: any, thisArg: unknown, argumentList: unknown[] | unknown[][]): boolean => {
        try {
            return decideResult(convertStringListToDecideList(params.commandList, argumentList));
        } catch (e) {
            if (InstanceofMethod(e, SyntaxError)) {
                throw e;
            }
            return false;
        }
    };
}

function getResult(command: CommandType | string, argumentList: unknown[], context: any = {}): boolean {
    if (StringMethod(command)) {
        if (Reflect.has(globalThis ?? {}, command)) {
            if (typeof (globalThis as any)[command] === 'function') {
                return InstanceofMethod.apply({}, [argumentList[0], (globalThis as any)[command]]);
            }
        }

        if (Reflect.has(self ?? {}, command)) {
            if (typeof (self as any)[command] === 'function') {
                return InstanceofMethod.apply({}, [argumentList[0], (self as any)[command]]);
            }
        }

        if (Reflect.has(window ?? {}, command)) {
            if (typeof (window as any)[command] === 'function') {
                return InstanceofMethod.apply({}, [argumentList[0], (window as any)[command]]);
            }
        }

        if (Reflect.has(global ?? {}, command)) {
            if (typeof (global as any)[command] === 'function') {
                return InstanceofMethod.apply({}, [argumentList[0], (global as any)[command]]);
            }
        }

        return false;
    } else {
        const result: any = command.apply(context, argumentList);
        if (BooleanMethod(result)) {
            return result;
        } else {
            return InstanceofMethod.apply({}, [argumentList[0], result.classRef]);
        }
    }
}

type convertResultType = {
    list: (boolean | number | boolean[])[];
    indexNot: number;
};

function convertStringListToDecideList(
    list: ParamsProxyEngineInterface['commandList'],
    argumentList: unknown[],
): convertResultType {

    const lastCommand = list.pop() as CommandMixType;
    let context: any = {};
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
            throw new SyntaxError('Please don`t use bind with package, in future we will try to fix it, but not now. If you how to fix it, please create issue or fork flow.')
        default:
            list.push(lastCommand);
    }

    const convertResult: convertResultType = {
        list: [],
        indexNot: -1,
    };
    let result: boolean;
    for (let i = 0; i < list.length; i++) {
        switch (list[i]) {
            case 'not':
                convertResult.indexNot = convertResult.list.push(0) - 1;
                continue;
            case 'or':
                const lastItem: boolean | number | boolean[] | undefined = convertResult.list.at(-1);
                result = getResult(list[i + 1], argumentList, context);
                if (Array.isArray(lastItem)) {
                    lastItem.push(result);
                } else {
                    convertResult.list[convertResult.list.length - 1] = [lastItem as boolean, result];
                }
                i++;
                continue;
            default:
                result = getResult(list[i], argumentList, context);
                convertResult.list.push(result);
        }
    }
    return convertResult;
}

function decideResult({list, indexNot}: convertResultType): boolean {
    let index = 0;
    let result = false;

    for (let curr of list) {
        if (indexNot !== index) {
            if (Array.isArray(curr)) {
                curr = curr.some((t) => t);
            }
            if (index > indexNot && indexNot > -1) {
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
