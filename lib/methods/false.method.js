"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FalseMethod = void 0;
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
    return argument === false;
}
exports.FalseMethod = FalseMethod;
