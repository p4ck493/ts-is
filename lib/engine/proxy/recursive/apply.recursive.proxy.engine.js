"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursiveApply = void 0;
const instanceof_method_1 = require("../../methods/instanceof.method");
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
            const indexAll = params.commandList.findIndex((command) => command === 'all');
            if (indexAll > -1) {
                // TODO .all.
                console.log(params.commandList, indexAll, params.commandList[indexAll]);
            }
            return decideResult(convertStringListToDecideList(params.commandList, argumentList));
        }
        catch (e) {
            return false;
        }
    };
}
exports.proxyRecursiveApply = proxyRecursiveApply;
function convertStringListToDecideList(list, argumentList) {
    let beforeNewList = [];
    const run = (command) => {
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
            return command.apply({}, argumentList);
        }
    };
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 'not') {
            beforeNewList.push(0);
            continue;
        }
        if (list[i + 1] === 'or') {
            const lastItem = beforeNewList[beforeNewList.length - 1];
            if (Array.isArray(lastItem)) {
                lastItem.push(run(list[i]));
            }
            else {
                beforeNewList.push(run(list[i]));
            }
            i++;
            continue;
        }
        if (i > 1 && list[i - 1] === 'or') {
            beforeNewList[beforeNewList.length - 1].push(run(list[i]));
        }
        else {
            beforeNewList.push(run(list[i]));
        }
    }
    return beforeNewList;
}
function decideResult(list) {
    const indexNot = list.findIndex((a) => a === 0);
    let index = 0, result = false;
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
