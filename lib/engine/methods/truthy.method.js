"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 *
 *
 * @method Truthy
 * @example
 * Is.Truthy()
 * Is.Not.Truthy()
 * Is.All.Truthy()
 * Is.All.Not.Truthy()
 */
function TruthyMethod(argument) {
    const context = this; // TODO ContextMethodInterface
    // console.log(context);
    return !index_1.methods.falsy(argument);
}
exports.default = TruthyMethod;
