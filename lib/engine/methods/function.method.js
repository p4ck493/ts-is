"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionMethod = void 0;
function FunctionMethod(argument) {
    return {}.toString.call(argument) === '[object Function]';
}
exports.FunctionMethod = FunctionMethod;
