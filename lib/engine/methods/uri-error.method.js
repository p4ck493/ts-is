"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URIErrorMethod = void 0;
const index_1 = require("./index");
function URIErrorMethod(argument) {
    return index_1.methods.instanceof(argument, URIError);
}
exports.URIErrorMethod = URIErrorMethod;
