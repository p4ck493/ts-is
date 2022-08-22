"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 * @method map
 */
function MapMethod(argument) {
    return index_1.methods.instanceof(argument, Map);
}
exports.default = MapMethod;
