"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method Null
 * @example
 * Is.Null()
 * Is.Not.Null()
 * Is.All.Null()
 * Is.All.Not.Null()
 */
function NullMethod(argument) {
    const context = this; // TODO ContextMethodInterface
    // console.log(context);
    return argument === null;
}
exports.default = NullMethod;
