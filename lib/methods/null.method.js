"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullMethod = void 0;
/**
 *
 * @method Null
 * @param {unknown} argument
 * @example
 * Is.Null()
 * Is.Not.Null()
 * Is.All.Null()
 * Is.All.Not.Null()
 */
function NullMethod(argument) {
    return argument === null;
}
exports.NullMethod = NullMethod;
