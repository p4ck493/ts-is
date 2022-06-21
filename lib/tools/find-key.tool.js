"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findKey = void 0;
const compare_method_1 = require("../methods/compare.method");
// TODO guard on arguments
function findKey(object, value) {
    for (const key of Object.keys(object)) {
        if ((0, compare_method_1.CompareMethod)(object[key], value)) {
            return key;
        }
    }
    return null;
}
exports.findKey = findKey;
