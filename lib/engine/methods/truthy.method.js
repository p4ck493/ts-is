"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruthyMethod = void 0;
const index_1 = require("./index");
function TruthyMethod(argument) {
    return !index_1.methods.falsy(argument);
}
exports.TruthyMethod = TruthyMethod;
