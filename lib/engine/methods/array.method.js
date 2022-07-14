"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 *
 *
 * @method Array
 *
 * @example
 * @RegisterInIs
 * class Person {
 *
 * }
 *
 * Is.Person.Array([new Person()]) // Returns true
 * Is.Person.Array([new Address()]) // Returns false
 * Is.Array([new Address()]) // Returns true
 * Is.Array([]) // Returns true
 * Is.Not.Array([]) // Returns false
 * Is.Not.Array(0) // Returns true
 * Is.Not.Array(true) // Returns true
 * Is.Not.Array('Hello world') // Returns true
 *
 * // Special cases:
 *
 * // Case #1
 * const arr: Person[] = [];
 * Is.Person.Array(arr) // Returns false because it is an empty array, but for: Is.Array(arr) returns true!
 *
 * // Case #2
 * Is.Not.Person.Array(arr) // Returns true
 *
 */
function ArrayMethod(argument, classRef) {
    if (argument instanceof Array) {
        if (index_1.methods.function(classRef)) {
            if (argument.length) {
                return argument.every((item) => item instanceof classRef);
            }
            else {
                return false;
            }
        }
        return true;
    }
    return false;
}
exports.default = ArrayMethod;
