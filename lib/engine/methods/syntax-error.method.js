"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntaxErrorMethod = void 0;
const index_1 = require("./index");
function SyntaxErrorMethod(argument) {
    return index_1.methods.instanceof(argument, SyntaxError);
}
exports.SyntaxErrorMethod = SyntaxErrorMethod;
