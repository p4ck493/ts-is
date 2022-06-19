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
 * If need check array of some class, just register the class in typeWrappers, examples:
 *
 * Example #1
 * class Person {
 *     public fullName: string = 'Ivan Karbashevskyi';
 * }
 *
 * Object.assign(typeWrappers, {Person});
 *
 * // Later
 * Is.Person.Array([new Person(), true, 0]) // Return false
 * Is.Not.Person.Array([new Person(), true, 0]) // Return true
 * Is.Person.Array([new Person(), new Person()]) // Return true
 * Is.Person.Array([]) // Return true
 *
 * Example #2
 *
 * @RegisterInIs({ className: 'PersonModel' }) // Or @RegisterInIs() and then call later, as shown in example #1 above
 * class Person {
 *     public fullName: string = 'Ivan Karbashevskyi';
 * }
 *
 * // Later
 * Is.PersonModel.Array([new Person(), true, 0]) // Return false
 * Is.Not.PersonModel.Array([new Person(), true, 0]) // Return true
 * Is.PersonModel.Array([new Person(), new Person()]) // Return true
 * Is.PersonModel.Array([]) // Return true
 *
 *
 * @param target must by an object
 * @param name must be a string
 * @param methodList must be array of methods
 * @param beforeWrapperList must be array of before wrappers
 * @param typeWrapperList must be array of type wrappers
 * @param afterWrapperList must be array of after wrappers
 */
function proxyRecursive(target, name, methodList, beforeWrapperList, typeWrapperList, afterWrapperList) {
    var _a;
    let newTarget = methodList;
    const hasMethod = methodList.hasOwnProperty(name);
    if (hasMethod) {
        newTarget = (_a = methodList[name]) !== null && _a !== void 0 ? _a : target;
    }
    else {
        const hasBeforeWrapper = wrappers_1.beforeWrappers.hasOwnProperty(name);
        const hasTypeWrapper = wrappers_1.typeWrappers.hasOwnProperty(name);
        const hasAfterWrapper = wrappers_1.afterWrappers.hasOwnProperty(name);
        const notFoundWrapperInAnyWrappers = [hasBeforeWrapper, hasTypeWrapper, hasAfterWrapper];
        if (hasBeforeWrapper) {
            beforeWrapperList.push(wrappers_1.beforeWrappers[name]);
        }
        if (hasTypeWrapper) {
            typeWrapperList.push(wrappers_1.typeWrappers[name]);
        }
        if (hasAfterWrapper) {
            afterWrapperList.push(wrappers_1.afterWrappers[name]);
        }
        if (notFoundWrapperInAnyWrappers.every((item) => !item)) {
            throw new Error(`Not found propery with name: ${name}`);
        }
    }
    return new Proxy(newTarget, {
        get: (targetGet, nameGet) => {
            return proxyRecursive(targetGet[nameGet], nameGet, targetGet, beforeWrapperList, typeWrapperList, afterWrapperList);
        },
        apply: (targetApply, thisArg, argumentList) => {
            argumentList.push(...(typeWrapperList !== null && typeWrapperList !== void 0 ? typeWrapperList : []));
            let result;
            if (beforeWrapperList === null || beforeWrapperList === void 0 ? void 0 : beforeWrapperList.length) {
                result = beforeWrapperList.reduce((previousValue, currentValue) => {
                    return currentValue(targetApply, argumentList, previousValue);
                }, result);
            }
            else {
                result = targetApply(...argumentList);
            }
            if (afterWrapperList === null || afterWrapperList === void 0 ? void 0 : afterWrapperList.length) {
                result = afterWrapperList.reduce((previousValue, currentValue) => {
                    return currentValue(previousValue);
                }, result);
            }
            return result;
        },
    });
}
/**
 *
 * @param defaultFunction must be method
 * @param methodList must be array of methods
 */
function proxyGenerator(defaultFunction, methodList) {
    return new Proxy(defaultFunction, {
        get: (target, name) => {
            return proxyRecursive(target, name, methodList, [], [], []);
        },
        apply: (target, thisArg, argumentList) => {
            return target(...argumentList);
        },
    });
}
exports.proxyGenerator = proxyGenerator;
