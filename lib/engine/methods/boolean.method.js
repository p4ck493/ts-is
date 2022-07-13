"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method Boolean
 * @example
 * Is.Boolean()
 * Is.Not.Boolean()
 * Is.All.Boolean()
 * Is.All.Not.Boolean()
 */
function BooleanMethod(argument) {
    const context = this; // TODO ContextMethodInterface
    // console.log(context);
    return typeof argument === 'boolean';
}
exports.default = BooleanMethod;
