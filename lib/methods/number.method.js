"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberMethod = void 0;
/**
 *
 * @param argument is any type
 */
function NumberMethod(argument) {
    return typeof argument === 'number' && !isNaN(argument);
}
exports.NumberMethod = NumberMethod;
