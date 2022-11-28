import {ParamsProxyEngineInterface} from '../../../interfaces/engine/proxy/params.proxy.engine.interface';
import {methods} from '../../methods';

type proxyRecursiveApplyType = (
    targetApply: any,
    thisArg: unknown,
    argumentList: unknown[] & unknown[][],
) => ReturnType<typeof targetApply>;

export function proxyRecursiveApply(params: ParamsProxyEngineInterface): proxyRecursiveApplyType {
    return (targetApply, thisArg, argumentList): boolean => {

        console.log(globalThis);
        console.log(params.commandList);
        console.log('params', params, 'targetApply', targetApply, 'thisArg', thisArg, 'argumentList', argumentList);

        // TODO call apply
        // if (params.lastCommandIsCall) {
        //     argumentList.splice(0, 1);
        // }
        //
        // if (params.lastCommandIsApply) {
        //     argumentList = argumentList[1] as any;
        // }

        const list = convertListToFinaleList(params.commandList, argumentList);
        console.log('list', list);

        const result: boolean = customReduce(list);
        console.log('result', result);

        return result;

    };
}

function convertListToFinaleList(list: string[], argumentList: any[]): (boolean | number | boolean[])[] {
    let beforeNewList: (boolean | number | boolean[])[] = [];

    // TODO .all.

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
    // TODO call, apply, model, globalThis
    console.log('getResult: ', 'name', name, 'argumentList', argumentList);
    return methods[name].apply({}, argumentList);
}

function customReduce(arr: (boolean | number | boolean[])[]): boolean {
    const prev: {
        result: boolean;
        index: number;
        indexNot: number;
    } = {
        result: false,
        indexNot: arr.findIndex((a) => a === 0),
        index: 0,
    };
    for (let curr of arr) {
        if (prev.indexNot !== prev.index) {
            if (Array.isArray(curr)) {
                curr = curr.some((t) => t);
            }
            if (prev.index > prev.indexNot && prev.indexNot > -1) {
                curr = !curr;
            }
            if (typeof curr === 'boolean') {
                if (curr) {
                    prev.result = curr;
                } else {
                    return false;
                }
            }
        }
        prev.index++;
    }
    return prev.result;
};
