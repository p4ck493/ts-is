"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvalErrorMethod = void 0;
const index_1 = require("./index");
/**
 * @method evalError
 */
function EvalErrorMethod(argument) {
    return index_1.methods.instanceof(argument, EvalError);
}
exports.EvalErrorMethod = EvalErrorMethod;
