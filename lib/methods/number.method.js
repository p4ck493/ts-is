"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberMethod = void 0;
/**
 *
 * @method Number
 * @param {unknown} argument
 * @example
 * Is.Number()
 * Is.Not.Number()
 * Is.All.Number()
 * Is.All.Not.Number()
 */
function NumberMethod(argument) {
    return typeof argument === 'number' && !isNaN(argument);
}
exports.NumberMethod = NumberMethod;
