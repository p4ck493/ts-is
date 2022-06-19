"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectMethod = void 0;
const array_method_1 = require("./array.method");
const null_method_1 = require("./null.method");
/**
 * ObjectMethod is an Object
 * @param argument is any type
 */
function ObjectMethod(argument) {
    return typeof argument === 'object' && !(0, array_method_1.ArrayMethod)(argument) && !(0, null_method_1.NullMethod)(argument);
}
exports.ObjectMethod = ObjectMethod;
