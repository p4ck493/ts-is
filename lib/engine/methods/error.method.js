"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMethod = void 0;
const index_1 = require("./index");
/**
 * @method error
 */
function ErrorMethod(argument) {
    return index_1.methods.instanceof(argument, Error);
}
exports.ErrorMethod = ErrorMethod;
