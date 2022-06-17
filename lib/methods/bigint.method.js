"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigintMethod = void 0;
/**
 *
 * @param argument is any type
 */
function BigintMethod(argument) {
    return typeof argument === 'bigint';
}
exports.BigintMethod = BigintMethod;
