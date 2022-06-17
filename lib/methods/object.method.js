"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectMethod = void 0;
const index_1 = require("../index");
/**
 * ObjectMethod is an Object
 * @param argument is any type
 */
function ObjectMethod(argument) {
    return typeof argument === 'object' && index_1.Is.Not.Array(argument) && index_1.Is.Not.Null(argument);
}
exports.ObjectMethod = ObjectMethod;
