"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberMethod = void 0;
function NumberMethod(argument) {
    return typeof argument === 'number' && !isNaN(argument);
}
exports.NumberMethod = NumberMethod;
