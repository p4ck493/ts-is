"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const or_case_engine_1 = __importDefault(require("../../cases/or.case.engine"));
const wrapper_or_case_engine_1 = __importDefault(require("../../cases/wrapper-or.case.engine"));
const find_key_tool_1 = require("../../../tools/find-key.tool");
const case_const_1 = require("../../../consts/case.const");
const case_enum_1 = __importDefault(require("../../../enums/case.enum"));
const and_case_engine_1 = __importDefault(require("../../cases/and.case.engine"));
const wrapper_and_case_engine_1 = __importDefault(require("../../cases/wrapper-and.case.engine"));
const recordOfCases = {
    [case_enum_1.default.AND]: and_case_engine_1.default,
    [case_enum_1.default.OR]: or_case_engine_1.default,
    [case_enum_1.default.WRAPPER_OR]: wrapper_or_case_engine_1.default,
    [case_enum_1.default.WRAPPER_AND]: wrapper_and_case_engine_1.default,
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
        const key = case_enum_1.default[foundCase];
        const context = {
            targetApply,
            argumentList,
            lists,
        };
        return recordOfCases[key].runCase.call(context);
    };
}
exports.default = proxyRecursiveApply;
