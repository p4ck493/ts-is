"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 * @method error
 */
function ErrorMethod(argument) {
    return index_1.methods.instanceof(argument, Error);
}
exports.default = ErrorMethod;
