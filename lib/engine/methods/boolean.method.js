"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method boolean
 * @example
 * is.boolean()
 * is.not.boolean()
 * is.all.boolean()
 * is.all.not.boolean()
 */
function BooleanMethod(argument) {
    return typeof argument === 'boolean';
}
exports.default = BooleanMethod;
