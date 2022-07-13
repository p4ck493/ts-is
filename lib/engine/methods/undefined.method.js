"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method undefined
 * @example
 * Is.undefined()
 * Is.Not.undefined()
 * Is.All.undefined()
 * Is.All.Not.undefined()
 */
function UndefinedMethod(argument) {
    const context = this; // TODO ContextMethodInterface
    // console.log(context);
    return argument === undefined;
}
exports.default = UndefinedMethod;
