"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyObjectMethod = void 0;
const empty_method_1 = require("./empty.method");
const object_method_1 = require("./object.method");
/**
 *
 * @method EmptyObject
 * @param argument is object type
 * @example
 * Is.EmptyObject()
 * Is.Not.EmptyObject()
 * Is.All.EmptyObject()
 * Is.All.Not.EmptyObject()
 */
function EmptyObjectMethod(argument) {
    if ((0, object_method_1.ObjectMethod)(argument)) {
        return (0, empty_method_1.EmptyMethod)(argument);
    }
    return false;
}
exports.EmptyObjectMethod = EmptyObjectMethod;
