"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method number
 * @example
 * is.number()
 * is.not.number()
 * is.all.number()
 * is.all.not.number()
 */
function NumberMethod(argument) {
    return typeof argument === 'number' && !isNaN(argument);
}
exports.default = NumberMethod;
