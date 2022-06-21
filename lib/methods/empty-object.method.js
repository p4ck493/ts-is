"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyObjectMethod = void 0;
const empty_method_1 = require("./empty.method");
const object_method_1 = require("./object.method");
/**
 *
 * @param argument is object type
 */
function EmptyObjectMethod(argument) {
    if ((0, object_method_1.ObjectMethod)(argument)) {
        return (0, empty_method_1.EmptyMethod)(argument);
    }
    return false;
}
exports.EmptyObjectMethod = EmptyObjectMethod;
