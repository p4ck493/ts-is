"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyArrayMethod = void 0;
const empty_method_1 = require("./empty.method");
const object_method_1 = require("./object.method");
/**
 *
 * @method EmptyArray
 * @param argument is object type
 * @returns {boolean}
 * @example
 * Is.EmptyArray()
 * Is.Not.EmptyArray()
 * Is.All.EmptyArray()
 * Is.All.Not.EmptyArray()
 */
function EmptyArrayMethod(argument) {
    if ((0, object_method_1.ObjectMethod)(argument)) {
        return (0, empty_method_1.EmptyMethod)(argument);
    }
    return false;
}
exports.EmptyArrayMethod = EmptyArrayMethod;
