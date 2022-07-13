"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method Bigint
 * @example
 * Is.Bigint()
 * Is.Not.Bigint()
 * Is.All.Bigint()
 * Is.All.Not.Bigint()
 */
function BigIntMethod(argument) {
    const context = this; // TODO ContextMethodInterface
    // console.log(context);
    return typeof argument === 'bigint';
}
exports.default = BigIntMethod;
