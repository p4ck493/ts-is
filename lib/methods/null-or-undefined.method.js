"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullOrUndefinedMethod = void 0;
const null_method_1 = require("./null.method");
const undefined_method_1 = require("./undefined.method");
/**
 *
 * @method NulOrUndefined
 * @param {unknown} argument
 * @example
 * Is.NullOrUndefined()
 * Is.Not.NullOrUndefined()
 * Is.All.NullOrUndefined()
 * Is.All.Not.NullOrUndefined()
 */
function NullOrUndefinedMethod(argument) {
    return (0, null_method_1.NullMethod)(argument) || (0, undefined_method_1.UndefinedMethod)(argument);
}
exports.NullOrUndefinedMethod = NullOrUndefinedMethod;
