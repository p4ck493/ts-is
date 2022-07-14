"use strict";
/**
 *
 * @method String
 * @example
 * Is.String()
 * Is.Not.String()
 * Is.All.String()
 * Is.All.Not.String()
 */
Object.defineProperty(exports, "__esModule", { value: true });
function StringMethod(argument) {
    return typeof argument === 'string';
}
exports.default = StringMethod;
