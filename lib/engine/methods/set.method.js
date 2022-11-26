"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetMethod = void 0;
const index_1 = require("./index");
function SetMethod(argument) {
    return index_1.methods.instanceof(argument, (Set));
}
exports.SetMethod = SetMethod;
