"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceErrorMethod = void 0;
const index_1 = require("./index");
function ReferenceErrorMethod(argument) {
    return index_1.methods.instanceof(argument, ReferenceError);
}
exports.ReferenceErrorMethod = ReferenceErrorMethod;
