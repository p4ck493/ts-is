"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigintMethod = void 0;
/**
 *
 * @method Bigint
 * @param {unknown} argument
 * @returns {boolean}
 * @example
 * Is.Bigint()
 * Is.Not.Bigint()
 * Is.All.Bigint()
 * Is.All.Not.Bigint()
 */
function BigintMethod(argument) {
    return typeof argument === 'bigint';
}
exports.BigintMethod = BigintMethod;
