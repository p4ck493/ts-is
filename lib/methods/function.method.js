"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionMethod = void 0;
/**
 * @param argument is any type
 */
function FunctionMethod(argument) {
    return {}.toString.call(argument) === '[object Function]';
}
exports.FunctionMethod = FunctionMethod;
