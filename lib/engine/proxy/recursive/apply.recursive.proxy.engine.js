"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursiveApply = void 0;
const or_case_engine_1 = require("../../cases/or.case.engine");
const wrapper_or_case_engine_1 = require("../../cases/wrapper-or.case.engine");
const find_key_tool_1 = require("../../../tools/find-key.tool");
const case_const_1 = require("../../../consts/case.const");
const case_enum_1 = require("../../../enums/case.enum");
const and_case_engine_1 = require("../../cases/and.case.engine");
const wrapper_and_case_engine_1 = require("../../cases/wrapper-and.case.engine");
const recordOfCases = {
    [case_enum_1.CaseEnum.AND]: and_case_engine_1.AndCaseEngine,
    [case_enum_1.CaseEnum.OR]: or_case_engine_1.OrCaseEngine,
    [case_enum_1.CaseEnum.WRAPPER_OR]: wrapper_or_case_engine_1.WrapperOrCaseEngine,
    [case_enum_1.CaseEnum.WRAPPER_AND]: wrapper_and_case_engine_1.WrapperAndCaseEngine,
};
function proxyRecursiveApply(lists) {
    return (targetApply, thisArg, argumentList) => {
        var _a, _b, _c;
        const flags = {
            or: !!((_a = lists === null || lists === void 0 ? void 0 : lists.or) === null || _a === void 0 ? void 0 : _a.length),
            wrapper: !!((_b = lists === null || lists === void 0 ? void 0 : lists.all) === null || _b === void 0 ? void 0 : _b.length) || !!((_c = lists === null || lists === void 0 ? void 0 : lists.not) === null || _c === void 0 ? void 0 : _c.length),
        };
        const foundCase = (0, find_key_tool_1.findKey)(case_const_1.CaseConst, flags);
        if (!foundCase) {
            throw new Error(`No case found for this command. More information: https://github.com/p4ck493/ts-is`);
        }
        const key = case_enum_1.CaseEnum[foundCase];
        if (lists.lastCommandIsCall) {
            argumentList.splice(0, 1);
        }
        if (lists.lastCommandIsApply) {
            argumentList = argumentList[1];
        }
        console.log(argumentList);
        const context = {
            targetApply,
            argumentList,
            lists,
        };
        return recordOfCases[key].runCase.call(context);
    };
}
exports.proxyRecursiveApply = proxyRecursiveApply;
