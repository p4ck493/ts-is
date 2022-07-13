"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method Number
 * @example
 * Is.Number()
 * Is.Not.Number()
 * Is.All.Number()
 * Is.All.Not.Number()
 */
function NumberMethod(argument) {
    const context = this; // TODO ContextMethodInterface
    // console.log(context);
    return typeof argument === 'number' && !isNaN(argument);
}
exports.default = NumberMethod;
