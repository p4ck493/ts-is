"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FalsyMethod = void 0;
/**
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Falsy}
 *
 * @method Falsy
 * @param {unknown} argument
 * @example
 * Is.Falsy()
 * Is.Not.Falsy()
 * Is.All.Falsy()
 * Is.All.Not.Falsy()
 */
function FalsyMethod(argument) {
    return !argument;
}
exports.FalsyMethod = FalsyMethod;
