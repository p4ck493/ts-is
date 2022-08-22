"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 * @method evalError
 */
function EvalErrorMethod(argument) {
    return index_1.methods.instanceof(argument, EvalError);
}
exports.default = EvalErrorMethod;
