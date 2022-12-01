"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruthyMethod = void 0;
const falsy_method_1 = require("./falsy.method");
function TruthyMethod(argument) {
    return !(0, falsy_method_1.FalsyMethod)(argument);
}
exports.TruthyMethod = TruthyMethod;
