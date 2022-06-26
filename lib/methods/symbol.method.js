"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolMethod = void 0;
/**
 *
 * @method Symbol
 * @param {unknown} argument
 * @example
 * Is.Symbol()
 * Is.Not.Symbol()
 * Is.All.Symbol()
 * Is.All.Not.Symbol()
 */
function SymbolMethod(argument) {
    return typeof argument === 'symbol';
}
exports.SymbolMethod = SymbolMethod;
