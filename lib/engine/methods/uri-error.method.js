"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 * @method URIError
 */
function URIErrorMethod(argument) {
    return index_1.methods.instanceof(argument, URIError);
}
exports.default = URIErrorMethod;
