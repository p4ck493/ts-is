"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 * @method date
 */
function SetMethod(argument) {
    return index_1.methods.instanceof(argument, (Set));
}
exports.default = SetMethod;
