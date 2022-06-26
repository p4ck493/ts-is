"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruthyMethod = void 0;
const falsy_method_1 = require("./falsy.method");
/**
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Truthy}
 *
 * @method Truthy
 * @param {unknown} argument
 * @example
 * Is.Truthy()
 * Is.Not.Truthy()
 * Is.All.Truthy()
 * Is.All.Not.Truthy()
 */
function TruthyMethod(argument) {
    return !(0, falsy_method_1.FalsyMethod)(argument);
}
exports.TruthyMethod = TruthyMethod;
