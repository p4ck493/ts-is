"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 * @method regExp
 */
function RegExpMethod(argument) {
    return index_1.methods.instanceof(argument, RegExp);
}
exports.default = RegExpMethod;
