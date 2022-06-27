"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyArrayMethod = void 0;
const empty_method_1 = require("./empty.method");
const array_method_1 = require("./array.method");
/**
 *
 * @method EmptyArray
 * @param argument is object type
 * @example
 * Is.EmptyArray()
 * Is.Not.EmptyArray()
 * Is.All.EmptyArray()
 * Is.All.Not.EmptyArray()
 */
function EmptyArrayMethod(argument) {
    if ((0, array_method_1.ArrayMethod)(argument)) {
        return (0, empty_method_1.EmptyMethod)(argument);
    }
    return false;
}
exports.EmptyArrayMethod = EmptyArrayMethod;
