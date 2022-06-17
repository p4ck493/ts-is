"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayMethod = void 0;
/**
 * Collection is an Array
 * @param argument is any type
 */
function ArrayMethod(argument) {
    return (Array === null || Array === void 0 ? void 0 : Array.isArray) ? Array.isArray(argument) : argument instanceof Array;
}
exports.ArrayMethod = ArrayMethod;
