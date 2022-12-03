"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursiveApply = void 0;
const instanceof_method_1 = require("../../methods/instanceof.method");
const boolean_method_1 = require("../../methods/boolean.method");
const string_method_1 = require("../../methods/string.method");
function proxyRecursiveApply(params) {
    return (notUsedTargetApply, thisArg, argumentList) => {
        try {
            return decideResult(convertStringListToDecideList(params.commandList, argumentList));
        }
        catch (e) {
            if ((0, instanceof_method_1.InstanceofMethod)(e, SyntaxError)) {
                throw e;
            }
            return false;
        }
    };
}
exports.proxyRecursiveApply = proxyRecursiveApply;
function getResult(command, argumentList, context = {}) {
    if ((0, string_method_1.StringMethod)(command)) {
        if (Reflect.has(globalThis !== null && globalThis !== void 0 ? globalThis : {}, command)) {
            if (typeof globalThis[command] === 'function') {
                return instanceof_method_1.InstanceofMethod.apply({}, [argumentList[0], globalThis[command]]);
            }
        }
        if (Reflect.has(self !== null && self !== void 0 ? self : {}, command)) {
            if (typeof self[command] === 'function') {
                return instanceof_method_1.InstanceofMethod.apply({}, [argumentList[0], self[command]]);
            }
        }
        if (Reflect.has(window !== null && window !== void 0 ? window : {}, command)) {
            if (typeof window[command] === 'function') {
                return instanceof_method_1.InstanceofMethod.apply({}, [argumentList[0], window[command]]);
            }
        }
        if (Reflect.has(global !== null && global !== void 0 ? global : {}, command)) {
            if (typeof global[command] === 'function') {
                return instanceof_method_1.InstanceofMethod.apply({}, [argumentList[0], global[command]]);
            }
        }
        return false;
    }
    else {
        const result = command.apply(context, argumentList);
        if ((0, boolean_method_1.BooleanMethod)(result)) {
            return result;
        }
        else {
            return instanceof_method_1.InstanceofMethod.apply({}, [argumentList[0], result.classRef]);
        }
    }
}
function convertStringListToDecideList(list, argumentList) {
    const lastCommand = list.pop();
    let context = {};
    switch (lastCommand) {
        case 'apply':
            context = argumentList[0];
            argumentList = argumentList[1];
            break;
        case 'call':
            context = argumentList.shift();
            break;
        case 'bind':
            // TODO in this way need return Function with given context
            throw new SyntaxError('Please don`t use bind with package, in future we will try to fix it, but not now. If you how to fix it, please create issue or fork flow.');
        default:
            list.push(lastCommand);
    }
    const convertResult = {
        list: [],
        indexNot: -1,
    };
    let result;
    for (let i = 0; i < list.length; i++) {
        switch (list[i]) {
            case 'not':
                convertResult.indexNot = convertResult.list.push(0) - 1;
                continue;
            case 'or':
                const lastItem = convertResult.list.at(-1);
                result = getResult(list[i + 1], argumentList, context);
                if (Array.isArray(lastItem)) {
                    lastItem.push(result);
                }
                else {
                    convertResult.list[convertResult.list.length - 1] = [lastItem, result];
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
function decideResult({ list, indexNot }) {
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
