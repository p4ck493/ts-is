"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruthMethod = void 0;
const falsy_method_1 = require("./falsy.method");
/**
 *
 * @param argument is boolean type
 */
function TruthMethod(argument) {
    return !(0, falsy_method_1.FalsyMethod)(argument);
}
exports.TruthMethod = TruthMethod;
