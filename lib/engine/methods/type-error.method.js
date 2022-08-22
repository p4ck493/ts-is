"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 * @method typeError
 */
function TypeErrorMethod(argument) {
    return index_1.methods.instanceof(argument, TypeError);
}
exports.default = TypeErrorMethod;
