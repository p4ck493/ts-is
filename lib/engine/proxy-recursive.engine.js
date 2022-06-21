"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursive = void 0;
const wrappers_1 = require("../wrappers");
const case_tool_const_1 = require("../consts/tools/case.tool.const");
const case_tool_enum_1 = require("../enums/tools/case.tool.enum");
const instanceof_method_1 = require("../methods/instanceof.method");
const methods_1 = require("../methods");
const find_key_tool_1 = require("../tools/find-key.tool");
function proxyRecursiveGet(flags, beforeWrapperList, afterWrapperList) {
    return (targetGet, nameGet) => {
        return proxyRecursive(targetGet[nameGet], nameGet, flags, beforeWrapperList, afterWrapperList);
    };
}
/**
 * Case #1 Model
 * Is.Person(...)
 *
 * Case #2 Method
 * Is.Boolean(...)
 *
 * Case #3 After Wrapper & Method
 * Is.Not.Boolean(...)
 *
 * Case #4 Before Wrapper & Method
 * Is.All.Boolean(...)
 *
 * Case #5 Before & After Wrapper & Method
 * Is.All.Not.Boolean(...)
 *
 * Case #6 Before Wrapper & Model
 * Is.All.Person(...)
 *
 * Case #7 After Wrapper & Model
 * Is.Not.Person(...)
 *
 */
function proxyRecursiveApply(flags, beforeWrapperList, afterWrapperList) {
    return (targetApply, thisArg, argumentList) => {
        let result;
        const key = case_tool_enum_1.CaseToolEnum[(0, find_key_tool_1.findKey)(case_tool_const_1.CaseToolConst, flags)];
        switch (key) {
            case case_tool_enum_1.CaseToolEnum.Method:
                result = targetApply(...argumentList);
                break;
            case case_tool_enum_1.CaseToolEnum.AfterWrapperAndMethod:
                result = targetApply(...argumentList);
                result = afterWrapperList.reduce((previousValue, currentValue) => {
                    return currentValue(previousValue);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.BeforeWrapperAndMethod:
                result = beforeWrapperList.reduce((previousValue, currentValue) => {
                    return currentValue(targetApply, argumentList, previousValue);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.Model:
                result = (0, instanceof_method_1.InstanceofMethod)(argumentList[0], targetApply);
                break;
            case case_tool_enum_1.CaseToolEnum.BeforeWrapperAndModel:
                // Before
                result = beforeWrapperList.reduce((previousValue, currentValue) => {
                    return currentValue(instanceof_method_1.InstanceofMethod, argumentList, targetApply, previousValue);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.AfterWrapperAndModel:
                result = (0, instanceof_method_1.InstanceofMethod)(argumentList[0], targetApply);
                // After
                result = afterWrapperList.reduce((previousValue, currentValue) => {
                    return currentValue(previousValue);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.BeforeAndAfterWrapperAndMethod:
                // Before
                result = beforeWrapperList.reduce((previousValue, currentValue) => {
                    return currentValue(targetApply, argumentList, previousValue);
                }, result);
                // After
                result = afterWrapperList.reduce((previousValue, currentValue) => {
                    return currentValue(previousValue);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.BeforeAndAfterWrapperAndModel:
                // Before
                result = beforeWrapperList.reduce((previousValue, currentValue) => {
                    return currentValue(instanceof_method_1.InstanceofMethod, argumentList, targetApply, previousValue);
                }, result);
                // After
                result = afterWrapperList.reduce((previousValue, currentValue) => {
                    return currentValue(previousValue);
                }, result);
                break;
            default:
                throw new Error(`No case found for this command. More information: https://github.com/p4ck493/ts-is`);
        }
        return result;
    };
}
function checkFlags(flags, name) {
    const notFoundAnyMethods = Object.values(flags).map((property) => property);
    if (notFoundAnyMethods.every((item) => !item)) {
        throw new Error(`Not found propery with name: ${name}`);
    }
}
/**
 *
 * Wrappers
 * After: Is.Not.Boolean(0)
 * Before: Is.All.Boolean([true, false])
 * Mixin: Is.All.Not.Boolean([true, false, [0]])
 *
 *
 * @param target must by an object
 * @param name must be a string
 * @param flags TODO text
 * @param beforeWrapperList must be array of before wrappers
 * @param afterWrapperList must be array of after wrappers
 */
function proxyRecursive(target, name, flags, beforeWrapperList, afterWrapperList) {
    var _a;
    let newTarget = methods_1.Methods;
    if (methods_1.Methods.hasOwnProperty(name)) {
        flags.Method = true;
        newTarget = (_a = methods_1.Methods[name]) !== null && _a !== void 0 ? _a : target;
    }
    if (wrappers_1.modelWrappers.hasOwnProperty(name)) {
        flags.ModelWrapper = true;
        newTarget = wrappers_1.modelWrappers[name];
    }
    if (wrappers_1.beforeWrappers.hasOwnProperty(name)) {
        flags.BeforeWrapper = true;
        beforeWrapperList.push(wrappers_1.beforeWrappers[name]);
    }
    if (wrappers_1.afterWrappers.hasOwnProperty(name)) {
        flags.AfterWrapper = true;
        afterWrapperList.push(wrappers_1.afterWrappers[name]);
    }
    checkFlags(flags, name);
    return new Proxy(newTarget, {
        get: proxyRecursiveGet(flags, beforeWrapperList, afterWrapperList),
        apply: proxyRecursiveApply(flags, beforeWrapperList, afterWrapperList),
    });
}
exports.proxyRecursive = proxyRecursive;
