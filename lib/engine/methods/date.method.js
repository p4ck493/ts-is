"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 * @method date
 */
function DateMethod(argument) {
    return index_1.methods.instanceof(argument, Date);
}
exports.default = DateMethod;
