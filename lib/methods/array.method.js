"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayMethod = void 0;
/**
 *
 * Is.Person.Array([new Person()]) // Return true
 * Is.Person.Array([new Address()]) // Return false
 *
 * Collection is an Array
 * @param argument is any type
 * @param classRef
 */
const index_1 = require("../index");
function ArrayMethod(argument, classRef) {
    if (argument instanceof Array) {
        if (argument.length && index_1.Is.Function(classRef)) {
            return argument.every((item) => item instanceof classRef);
        }
        return true;
    }
    return false;
}
exports.ArrayMethod = ArrayMethod;
