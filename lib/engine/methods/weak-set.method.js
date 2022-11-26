"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeakSetMethod = void 0;
const index_1 = require("./index");
function WeakSetMethod(argument) {
    return index_1.methods.instanceof(argument, WeakSet);
}
exports.WeakSetMethod = WeakSetMethod;
