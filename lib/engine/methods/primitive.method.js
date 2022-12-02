"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimitiveMethod = void 0;
function PrimitiveMethod(argument) {
    if (argument === null) {
        return true;
    }
    if (typeof argument === 'object' || typeof argument === 'function') {
        return false;
    }
    else {
        return true;
    }
}
exports.PrimitiveMethod = PrimitiveMethod;
