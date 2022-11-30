"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursiveApply = void 0;
const methods_1 = require("../../methods");
function proxyRecursiveApply(params) {
    return (targetApply, thisArg, argumentList) => {
        try {
            // TODO .all.
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
function convertStringListToDecideList(list, argumentList) {
    let beforeNewList = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 'not') {
            beforeNewList.push(0);
            continue;
        }
        if (list[i + 1] === 'or') {
            const lastItem = beforeNewList[beforeNewList.length - 1];
            if (Array.isArray(lastItem)) {
                lastItem.push(getResult(list[i], argumentList));
            }
            else {
                beforeNewList.push([getResult(list[i], argumentList)]);
            }
            i++;
            continue;
        }
        if (i > 1 && list[i - 1] === 'or') {
            beforeNewList[beforeNewList.length - 1].push(getResult(list[i], argumentList));
        }
        else {
            beforeNewList.push(getResult(list[i], argumentList));
        }
    }
    return beforeNewList;
}
function getResult(name, argumentList) {
    if (Reflect.has(methods_1.methods, name)) {
        return methods_1.methods[name].apply({}, argumentList);
    }
    if (Reflect.has((globalThis !== null && globalThis !== void 0 ? globalThis : {}), name)) {
        if (typeof globalThis[name] === 'function') {
            return globalThis[name].apply({}, argumentList);
        }
    }
    if (Reflect.has((window !== null && window !== void 0 ? window : {}), name)) {
        if (typeof window[name] === 'function') {
            return window[name].apply({}, argumentList);
        }
    }
    return false;
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
