"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method bigint
 * @example
 * is.bigint()
 * is.not.bigint()
 * is.all.bigint()
 * is.all.not.bigint()
 */
function BigIntMethod(argument) {
    return typeof argument === 'bigint';
}
exports.default = BigIntMethod;
