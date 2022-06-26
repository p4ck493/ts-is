"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringMethod = void 0;
/**
 *
 * @method String
 * @param {unknown} argument
 * @example
 * Is.String()
 * Is.Not.String()
 * Is.All.String()
 * Is.All.Not.String()
 */
function StringMethod(argument) {
    return typeof argument === 'string';
}
exports.StringMethod = StringMethod;
