"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method Falsy
 * @example
 * Is.Falsy()
 * Is.Not.Falsy()
 * Is.All.Falsy()
 * Is.All.Not.Falsy()
 */
function FalsyMethod(argument) {
    const context = this; // TODO ContextMethodInterface
    // console.log(context);
    return !argument;
}
exports.default = FalsyMethod;
