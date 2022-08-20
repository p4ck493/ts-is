"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 *
 * @method object
 * @example
 * is.object()
 * is.not.object()
 * is.all.object()
 * is.all.not.object()
 *
 * // Or with generic
 * is.object<PersonModel>()
 * is.not.object<PersonModel>()
 * is.all.object<PersonModel>()
 * is.all.not.object<PersonModel>()
 */
function ObjectMethod(argument) {
    return typeof argument === 'object' && !index_1.methods.array(argument) && !index_1.methods.null(argument);
}
exports.default = ObjectMethod;
