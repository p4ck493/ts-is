"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeErrorMethod = void 0;
const index_1 = require("./index");
function TypeErrorMethod(argument) {
    return index_1.methods.instanceof(argument, TypeError);
}
exports.TypeErrorMethod = TypeErrorMethod;
