"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 *
 * @method truthy
 * @example
 * is.truthy()
 * is.not.truthy()
 * is.all.truthy()
 * is.all.not.truthy()
 */
function TruthyMethod(argument) {
    return !index_1.methods.falsy(argument);
}
exports.default = TruthyMethod;
