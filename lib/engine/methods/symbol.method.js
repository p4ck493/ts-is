"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method Symbol
 * @example
 * Is.Symbol()
 * Is.Not.Symbol()
 * Is.All.Symbol()
 * Is.All.Not.Symbol()
 */
function SymbolMethod(argument) {
    return typeof argument === 'symbol';
}
exports.default = SymbolMethod;
