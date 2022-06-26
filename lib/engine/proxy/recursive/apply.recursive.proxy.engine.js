"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursiveApply = void 0;
const case_tool_enum_1 = require("../../../enums/tools/case.tool.enum");
const find_key_tool_1 = require("../../../tools/find-key.tool");
const case_tool_const_1 = require("../../../consts/tools/case.tool.const");
const instanceof_method_1 = require("../../../methods/instanceof.method");
/**
 *
 * Is.String.Or.Number('string') // Returns true
 *
 *
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
 * Case #8 Connection Wrapper & Method
 * Is.Null.Or.Undefined.Or.Empty(...)
 *
 * Case #9 Before & Connection Wrapper & Method
 * Is.All.String.Or.Number(...)
 *
 * Case #10 Connection & After Wrapper & Method
 * Is.Not.Null.Or.Undefined(...)
 *
 * Case #11 Before & Connection & After Wrapper & Method
 * Is.All.Not.PersonModel.Or.AddressModel(...)
 *
 */
function proxyRecursiveApply(flags, lists) {
    return (targetApply, thisArg, argumentList) => {
        let result;
        const key = case_tool_enum_1.CaseToolEnum[(0, find_key_tool_1.findKey)(case_tool_const_1.CaseToolConst, flags)];
        switch (key) {
            case case_tool_enum_1.CaseToolEnum.Method:
                result = targetApply(...argumentList);
                break;
            case case_tool_enum_1.CaseToolEnum.AfterWrapperAndMethod:
                result = targetApply(...argumentList);
                result = lists.afterWrapper.reduce((previousValue, currentValue) => {
                    return currentValue(previousValue);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.BeforeWrapperAndMethod:
                result = lists.beforeWrapper.reduce((previousValue, currentValue) => {
                    return currentValue(targetApply, argumentList, previousValue);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.Model:
                result = (0, instanceof_method_1.InstanceofMethod)(argumentList[0], targetApply);
                break;
            case case_tool_enum_1.CaseToolEnum.BeforeWrapperAndModel:
                // Before
                result = lists.beforeWrapper.reduce((previousValue, currentValue) => {
                    return currentValue(instanceof_method_1.InstanceofMethod, argumentList, targetApply, previousValue);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.AfterWrapperAndModel:
                result = (0, instanceof_method_1.InstanceofMethod)(argumentList[0], targetApply);
                // After
                result = lists.afterWrapper.reduce((previousValue, currentValue) => {
                    return currentValue(previousValue);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.BeforeAndAfterWrapperAndMethod:
                // Before
                result = lists.beforeWrapper.reduce((previousValue, currentValue) => {
                    return currentValue(targetApply, argumentList);
                }, result);
                // After
                result = lists.afterWrapper.reduce((previousValue, currentValue) => {
                    return currentValue(previousValue);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.BeforeAndAfterWrapperAndModel:
                // Before
                result = lists.beforeWrapper.reduce((previousValue, currentValue) => {
                    return currentValue(instanceof_method_1.InstanceofMethod, argumentList, targetApply, previousValue);
                }, result);
                // After
                result = lists.afterWrapper.reduce((previousValue, currentValue) => {
                    return currentValue(previousValue);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.ConnectionWrapperAndMethod:
                // Connection
                result = lists.connectionWrapper.reduce((previousValue, currentValue) => {
                    // TODO use previousValue if will add new connection between method or models
                    return currentValue(...argumentList, lists.methods);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.ConnectionAndAfterWrapperAndMethod:
                // Connection
                result = lists.connectionWrapper.reduce((previousValue, currentValue) => {
                    // TODO use previousValue if will add new connection between method or models
                    return currentValue(...argumentList, lists.methods);
                }, result);
                // After
                result = lists.afterWrapper.reduce((previousValue, currentValue) => {
                    return currentValue(previousValue);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.BeforeAndConnectionAndAfterWrapperAndMethod:
                // Before
                result = lists.beforeWrapper.reduce((previousValue, currentValue) => {
                    // TODO lists.connectionWrapper make reduce
                    return currentValue(lists.connectionWrapper[0], argumentList, lists.methods);
                }, result);
                // After
                result = lists.afterWrapper.reduce((previousValue, currentValue) => {
                    return currentValue(previousValue);
                }, result);
                break;
            case case_tool_enum_1.CaseToolEnum.BeforeAndConnectionWrapperAndMethod:
                // TODO how to connect before and connection wrapper?
                // Before
                result = lists.beforeWrapper.reduce((previousValue, currentValue) => {
                    // TODO lists.connectionWrapper make reduce
                    return currentValue(lists.connectionWrapper[0], argumentList, lists.methods);
                }, result);
                break;
            default:
                throw new Error(`No case found for this command. More information: https://github.com/p4ck493/ts-is`);
        }
        return result;
    };
}
exports.proxyRecursiveApply = proxyRecursiveApply;
