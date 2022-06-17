"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullOrUndefinedOrEmptyMethod = void 0;
const universal_empty_checker_method_1 = require("./universal-empty-checker.method");
/**
 *
 * @param argument is any type
 */
function NullOrUndefinedOrEmptyMethod(argument) {
    return (0, universal_empty_checker_method_1.UniversalEmptyCheckerMethod)(argument);
}
exports.NullOrUndefinedOrEmptyMethod = NullOrUndefinedOrEmptyMethod;
