"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyMethod = void 0;
const null_or_undefined_method_1 = require("./null-or-undefined.method");
const boolean_method_1 = require("./boolean.method");
const number_method_1 = require("./number.method");
const bigint_method_1 = require("./bigint.method");
const function_method_1 = require("./function.method");
/**
 * Empty is: '', null, undefined, {}, NaN, Symbol(), [].
 * @param argument is any type
 */
function EmptyMethod(argument) {
    var _a;
    // if is null or undefined is empty
    if ((0, null_or_undefined_method_1.NullOrUndefinedMethod)(argument)) {
        return true;
    }
    // If argument is boolean when is not empty
    if ((0, boolean_method_1.BooleanMethod)(argument)) {
        return false;
    }
    // If argument is number when is not empty
    if ((0, number_method_1.NumberMethod)(argument)) {
        return false;
    }
    // If argument is BigInt when is not empty
    if ((0, bigint_method_1.BigintMethod)(argument)) {
        return false;
    }
    // If argument is Function when is not empty
    if ((0, function_method_1.FunctionMethod)(argument)) {
        return false;
    }
    return ((_a = Object.keys(argument)) === null || _a === void 0 ? void 0 : _a.length) === 0;
}
exports.EmptyMethod = EmptyMethod;
