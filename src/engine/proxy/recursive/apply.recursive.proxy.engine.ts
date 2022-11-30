import {
    CommandMixType,
    CommandType,
    ParamsProxyEngineInterface
} from '../../../interfaces/engine/proxy/params.proxy.engine.interface';
import {InstanceofMethod} from '../../methods/instanceof.method';

type proxyRecursiveApplyType = (
    notUsedTargetApply: any,
    thisArg: unknown,
    argumentList: unknown[] & unknown[][],
) => ReturnType<typeof notUsedTargetApply>;

export function proxyRecursiveApply(params: ParamsProxyEngineInterface): proxyRecursiveApplyType {
    return (notUsedTargetApply, thisArg, argumentList): boolean => {
        try {

            const lastCommand = <CommandMixType>params.commandList.pop();

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

            const indexAll: number = params.commandList.findIndex((command: CommandMixType) => command === 'all');
            if (indexAll > -1) {
                // TODO .all.
                // TODO Delete string 'all' from array
                // TODO check if argument is array  in array if true run decideResult in loop
                console.log(params.commandList, indexAll, params.commandList[indexAll]);
            }

            return decideResult(convertStringListToDecideList(params.commandList, argumentList));
        } catch (e) {
            return false;
        }
    };
}

function convertStringListToDecideList(
    list: ParamsProxyEngineInterface['commandList'],
    argumentList: any[]
): (boolean | number | boolean[])[] {
    let beforeNewList: (boolean | number | boolean[])[] = [];

    const run = (command: CommandType | string): boolean => {

        if (typeof command === 'string') {

            if (Reflect.has((globalThis ?? {}), command)) {
                if (typeof (globalThis as any)[command] === 'function') {
                    return InstanceofMethod.apply({}, [argumentList[0], (globalThis as any)[command]])
                }
            }

            if (Reflect.has((window ?? {}), command)) {
                if (typeof (window as any)[command] === 'function') {
                    return InstanceofMethod.apply({}, [argumentList[0], (window as any)[command]])
                }
            }

            return false;

        } else {
            return command.apply({}, argumentList);
        }
    };

    for (let i: number = 0; i < list.length; i++) {

        if (list[i] === 'not') {
            beforeNewList.push(0);
            continue;
        }

        if (list[i + 1] === 'or') {
            const lastItem: boolean | number | boolean[] | undefined = beforeNewList[beforeNewList.length - 1];
            if (Array.isArray(lastItem)) {
                lastItem.push(run(list[i]));
            } else {
                beforeNewList.push(run(list[i]));
            }
            i++;
            continue;
        }

        if (i > 1 && list[i - 1] === 'or') {
            (beforeNewList[beforeNewList.length - 1] as boolean[]).push(run(list[i]));
        } else {
            beforeNewList.push(run(list[i]));
        }
    }

    return beforeNewList;
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
