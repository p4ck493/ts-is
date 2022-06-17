"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullOrUndefinedMethod = void 0;
/**
 *
 * @param argument is any type
 */
const null_method_1 = require("./null.method");
const undefined_method_1 = require("./undefined.method");
function NullOrUndefinedMethod(argument) {
    return (0, null_method_1.NullMethod)(argument) || (0, undefined_method_1.UndefinedMethod)(argument);
}
exports.NullOrUndefinedMethod = NullOrUndefinedMethod;
