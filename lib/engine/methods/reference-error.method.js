"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 * @method referenceError
 */
function ReferenceErrorMethod(argument) {
    return index_1.methods.instanceof(argument, ReferenceError);
}
exports.default = ReferenceErrorMethod;
