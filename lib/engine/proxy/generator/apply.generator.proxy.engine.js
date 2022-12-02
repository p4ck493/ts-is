"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyGeneratorApply = void 0;
/**
 * This work only for command: is()
 */
function proxyGeneratorApply() {
    return (target, thisArg, argumentList) => {
        return target(...argumentList);
    };
}
exports.proxyGeneratorApply = proxyGeneratorApply;
