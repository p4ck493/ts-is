"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyStringMethod = void 0;
const universal_empty_checker_method_1 = require("./universal-empty-checker.method");
/**
 *
 * @param argument is string type
 */
function EmptyStringMethod(argument) {
    return (0, universal_empty_checker_method_1.UniversalEmptyCheckerMethod)(argument);
}
exports.EmptyStringMethod = EmptyStringMethod;
