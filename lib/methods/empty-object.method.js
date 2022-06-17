"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyObjectMethod = void 0;
const universal_empty_checker_method_1 = require("./universal-empty-checker.method");
/**
 *
 * @param argument is object type
 */
function EmptyObjectMethod(argument) {
    return (0, universal_empty_checker_method_1.UniversalEmptyCheckerMethod)(argument);
}
exports.EmptyObjectMethod = EmptyObjectMethod;
