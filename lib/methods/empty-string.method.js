"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyStringMethod = void 0;
const empty_method_1 = require("./empty.method");
const string_method_1 = require("./string.method");
/**
 *
 * @method EmptyString
 * @param argument is string type
 * @example
 * Is.EmptyString()
 * Is.Not.EmptyString()
 * Is.All.EmptyString()
 * Is.All.Not.EmptyString()
 */
function EmptyStringMethod(argument) {
    if ((0, string_method_1.StringMethod)(argument)) {
        return (0, empty_method_1.EmptyMethod)(argument);
    }
    return false;
}
exports.EmptyStringMethod = EmptyStringMethod;
