"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 *
 * @method Object
 * @example
 * Is.Object()
 * Is.Not.Object()
 * Is.All.Object()
 * Is.All.Not.Object()
 *
 * // Or with generic
 * Is.Object<PersonModel>()
 * Is.Not.Object<PersonModel>()
 * Is.All.Object<PersonModel>()
 * Is.All.Not.Object<PersonModel>()
 */
function ObjectMethod(argument) {
    const context = this; // TODO ContextMethodInterface
    // console.log(context);
    return typeof argument === 'object' && !index_1.methods.array(argument) && !index_1.methods.null(argument);
}
exports.default = ObjectMethod;
