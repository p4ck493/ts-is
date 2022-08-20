"use strict";
/**
 *
 * @method string
 * @example
 * is.string()
 * is.not.string()
 * is.all.string()
 * is.all.not.string()
 */
Object.defineProperty(exports, "__esModule", { value: true });
function StringMethod(argument) {
    return typeof argument === 'string';
}
exports.default = StringMethod;
