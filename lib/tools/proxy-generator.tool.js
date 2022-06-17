"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyGenerator = void 0;
const wrappers_1 = require("../wrappers");
/**
 *
 * Wrappers
 * After: Is.Not.Boolean(0)
 * Before: Is.All.Boolean([true, false])
 * Mixin: Is.All.Not.Boolean([true, false, [0]])
 *
 * If found in the path "AfterWrappers" it pushed to queue of "AfterWrappers" and the same of "BeforeWrappers"
 * Examples: Is.All.Not.Boolean([true, false, [0]])
 * Explain: AfterWrappers[BeforeWrappers[[true, false, [0]]]]
 *
 * @param target must by an object
 * @param name must be a string
 * @param methodList must be array of methods
 * @param beforeWrapperList must be array of before wrappers
 * @param afterWrapperList must be array of after wrappers
 */
const proxyRecursive = (
// TODO interface
target, name, methodList, beforeWrapperList, afterWrapperList) => {
    var _a;
    // TODO interface
    let newTarget = methodList;
    const hasMethod = methodList.hasOwnProperty(name);
    if (hasMethod) {
        newTarget = (_a = methodList[name]) !== null && _a !== void 0 ? _a : target;
    }
    else {
        const hasBeforeWrapper = wrappers_1.beforeWrappers.hasOwnProperty(name);
        if (hasBeforeWrapper) {
            beforeWrapperList.push(wrappers_1.beforeWrappers[name]);
        }
        const hasAfterWrapper = wrappers_1.afterWrappers.hasOwnProperty(name);
        if (hasAfterWrapper) {
            afterWrapperList.push(wrappers_1.afterWrappers[name]);
        }
        if (!hasBeforeWrapper && !hasAfterWrapper) {
            throw new Error(`Not found propery with name: ${name}`);
        }
    }
    return new Proxy(newTarget, {
        get: (targetGet, nameGet) => {
            // TODO interface
            return proxyRecursive(targetGet[nameGet], nameGet, targetGet, beforeWrapperList, afterWrapperList);
        },
        apply: (targetApply, thisArg, argumentList) => {
            // TODO interface
            let result;
            if (beforeWrapperList === null || beforeWrapperList === void 0 ? void 0 : beforeWrapperList.length) {
                result = beforeWrapperList[0](targetApply, argumentList);
            }
            else {
                result = targetApply(...argumentList);
            }
            if (afterWrapperList === null || afterWrapperList === void 0 ? void 0 : afterWrapperList.length) {
                result = afterWrapperList[0](result);
            }
            return result;
        },
    });
};
/**
 *
 * @param defaultFunction must be method
 * @param methodList must be array of methods
 */
const proxyGenerator = (defaultFunction, methodList) => {
    return new Proxy(defaultFunction, {
        get: (target, name) => {
            return proxyRecursive(target, name, methodList, [], []);
        },
        apply: (target, thisArg, argumentList) => {
            return target(...argumentList);
        },
    });
};
exports.proxyGenerator = proxyGenerator;
