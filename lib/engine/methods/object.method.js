"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectMethod = void 0;
const index_1 = require("./index");
function ObjectMethod(argument) {
    return typeof argument === 'object' && !index_1.methods.array(argument) && !index_1.methods.null(argument);
}
exports.ObjectMethod = ObjectMethod;
