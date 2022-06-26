"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullOrUndefinedOrEmptyMethod = void 0;
const empty_method_1 = require("./empty.method");
/**
 *
 * @method NullOrUndefinedOrEmpty
 * @param {unknown} argument
 * @example
 * Is.NullOrUndefinedOrEmpty()
 * Is.Not.NullOrUndefinedOrEmpty()
 * Is.All.NullOrUndefinedOrEmpty()
 * Is.All.Not.NullOrUndefinedOrEmpty()
 */
function NullOrUndefinedOrEmptyMethod(argument) {
    return (0, empty_method_1.EmptyMethod)(argument);
}
exports.NullOrUndefinedOrEmptyMethod = NullOrUndefinedOrEmptyMethod;
