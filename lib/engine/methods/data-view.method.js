"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataViewMethod = void 0;
const index_1 = require("./index");
function DataViewMethod(argument) {
    return index_1.methods.instanceof(argument, DataView);
}
exports.DataViewMethod = DataViewMethod;
