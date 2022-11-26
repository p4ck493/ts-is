"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeakMapMethod = void 0;
const index_1 = require("./index");
function WeakMapMethod(argument) {
    return index_1.methods.instanceof(argument, (WeakMap));
}
exports.WeakMapMethod = WeakMapMethod;
