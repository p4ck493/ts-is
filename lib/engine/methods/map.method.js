"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapMethod = void 0;
const index_1 = require("./index");
function MapMethod(argument) {
    return index_1.methods.instanceof(argument, Map);
}
exports.MapMethod = MapMethod;
