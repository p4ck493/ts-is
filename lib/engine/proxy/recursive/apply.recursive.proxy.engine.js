"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursiveApply = void 0;
const instanceof_method_1 = require("../../methods/instanceof.method");
const boolean_method_1 = require("../../methods/boolean.method");
function proxyRecursiveApply(params) {
    return (notUsedTargetApply, thisArg, argumentList) => {
        try {
            const lastCommand = params.commandList.pop();
            switch (lastCommand) {
                case 'apply':
                    argumentList = argumentList[1];
                    break;
                case 'call':
                    argumentList.splice(0, 1);
                    break;
                default:
                    params.commandList.push(lastCommand);
            }
            return decideResult(convertStringListToDecideList(params.commandList, argumentList));
        }
        catch (e) {
            return false;
        }
    };
}
exports.proxyRecursiveApply = proxyRecursiveApply;
function getResult(command, argumentList) {
    if (typeof command === 'string') {
        if (Reflect.has((globalThis !== null && globalThis !== void 0 ? globalThis : {}), command)) {
            if (typeof globalThis[command] === 'function') {
                return instanceof_method_1.InstanceofMethod.apply({}, [argumentList[0], globalThis[command]]);
            }
        }
        if (Reflect.has((window !== null && window !== void 0 ? window : {}), command)) {
            if (typeof window[command] === 'function') {
                return instanceof_method_1.InstanceofMethod.apply({}, [argumentList[0], window[command]]);
            }
        }
        return false;
    }
    else {
        const result = command.apply({}, argumentList);
        if ((0, boolean_method_1.BooleanMethod)(result)) {
            return result;
        }
        else {
            return instanceof_method_1.InstanceofMethod.apply({}, [argumentList[0], result.classRef]);
        }
    }
}
function convertStringListToDecideList(list, argumentList) {
    const convertResult = {
        list: [],
        indexNot: undefined,
    };
    for (let i = 0; i < list.length; i++) {
        switch (list[i]) {
            case 'not':
                convertResult.indexNot = convertResult.list.push(0) - 1;
                continue;
            case 'or':
                const lastItem = convertResult.list.at(-1);
                const result = getResult(list[i + 1], argumentList);
                if (Array.isArray(lastItem)) {
                    lastItem.push(result);
                }
                else {
                    convertResult.list[convertResult.list.length - 1] = [lastItem, result];
                }
                i++;
                continue;
            default:
                convertResult.list.push(getResult(list[i], argumentList));
        }
    }
    return convertResult;
}
function decideResult({ list, indexNot }) {
    let index = 0, result = false;
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
                }
                else {
                    return false;
                }
            }
        }
        index++;
    }
    return result;
}
;
