"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullOrUndefinedOrEmptyMethod = void 0;
const empty_method_1 = require("./empty.method");
/**
 *
 * @param argument is any type
 */
function NullOrUndefinedOrEmptyMethod(argument) {
    return (0, empty_method_1.EmptyMethod)(argument);
}
exports.NullOrUndefinedOrEmptyMethod = NullOrUndefinedOrEmptyMethod;
