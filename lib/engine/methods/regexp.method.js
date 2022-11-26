"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegExpMethod = void 0;
const index_1 = require("./index");
function RegExpMethod(argument) {
    return index_1.methods.instanceof(argument, RegExp);
}
exports.RegExpMethod = RegExpMethod;
