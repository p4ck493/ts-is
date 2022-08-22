"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 * @method syntaxError
 */
function SyntaxErrorMethod(argument) {
    return index_1.methods.instanceof(argument, SyntaxError);
}
exports.default = SyntaxErrorMethod;
