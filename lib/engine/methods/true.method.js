"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method True
 * @example
 * Is.True()
 * Is.Not.True()
 * Is.All.True()
 * Is.All.Not.True()
 */
function TrueMethod(argument) {
    const context = this; // TODO ContextMethodInterface
    // console.log(context);
    return argument === true;
}
exports.default = TrueMethod;
