"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursiveApply = void 0;
const methods_1 = require("../../methods");
function proxyRecursiveApply(params) {
    return (targetApply, thisArg, argumentList) => {
        var _a;
        try {
            if (['apply', 'call'].includes((_a = params.commandList.at(-1)) !== null && _a !== void 0 ? _a : '')) {
                argumentList.splice(0, 1);
                params.commandList = params.commandList.slice(0, params.commandList.length - 1);
            }
            const a = convertStringListToDecideList(params.commandList, argumentList);
            return decideResult(a);
        }
        catch (e) {
            return false;
        }
    };
}
exports.proxyRecursiveApply = proxyRecursiveApply;
function convertStringListToDecideList(list, argumentList) {
    let beforeNewList = [];
    // TODO .all.
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
