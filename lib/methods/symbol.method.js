"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolMethod = void 0;
/**
 *
 * @param argument is any type
 */
function SymbolMethod(argument) {
    return typeof argument === 'symbol';
}
exports.SymbolMethod = SymbolMethod;
