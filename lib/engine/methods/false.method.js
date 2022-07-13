"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method False
 * @example
 * Is.False()
 * Is.Not.False()
 * Is.All.False()
 * Is.All.Not.False()
 */
function FalseMethod(argument) {
    const context = this; // TODO ContextMethodInterface
    // console.log(context);
    return argument === false;
}
exports.default = FalseMethod;
