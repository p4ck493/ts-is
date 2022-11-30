import {ParamsProxyEngineInterface} from '../../../interfaces/engine/proxy/params.proxy.engine.interface';
import {methods} from '../../methods';

type proxyRecursiveApplyType = (
    targetApply: any,
    thisArg: unknown,
    argumentList: unknown[] & unknown[][],
) => ReturnType<typeof targetApply>;

export function proxyRecursiveApply(params: ParamsProxyEngineInterface): proxyRecursiveApplyType {
    return (targetApply, thisArg, argumentList): boolean => {
        try {

            // TODO .all.

            const lastCommand = <string>params.commandList.pop();

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

function convertStringListToDecideList(list: string[], argumentList: any[]): (boolean | number | boolean[])[] {
    let beforeNewList: (boolean | number | boolean[])[] = [];

    for (let i: number = 0; i < list.length; i++) {

        if (list[i] === 'not') {
            beforeNewList.push(0);
            continue;
        }

        if (list[i + 1] === 'or') {
            const lastItem: boolean | number | boolean[] | undefined = beforeNewList[beforeNewList.length - 1];
            if (Array.isArray(lastItem)) {
                lastItem.push(getResult(list[i], argumentList));
            } else {
                beforeNewList.push([getResult(list[i], argumentList)]);
            }
            i++;
            continue;
        }

        if (i > 1 && list[i - 1] === 'or') {
            (beforeNewList[beforeNewList.length - 1] as boolean[]).push(getResult(list[i], argumentList));
        } else {
            beforeNewList.push(getResult(list[i], argumentList));
        }
    }

    return beforeNewList;
}

function getResult(name: string, argumentList: any): boolean {

    if (Reflect.has(methods, name)) {
        return methods[name].apply({}, argumentList);
    }

    if (Reflect.has((globalThis ?? {}), name)) {
        if (typeof (globalThis as any)[name] === 'function') {
            return (globalThis as any)[name].apply({}, argumentList);
        }
    }

    if (Reflect.has((window ?? {}), name)) {
        if (typeof (window as any)[name] === 'function') {
            return (window as any)[name].apply({}, argumentList);
        }
    }

    return false;

}

function decideResult(list: (boolean | number | boolean[])[]): boolean {
    const indexNot: number = list.findIndex((a) => a === 0);
    let index: number = 0, result: boolean = false;

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
};
