"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findKey = void 0;
const methods_1 = require("../engine/methods");
// TODO guard on arguments
// TODO create another report for the method
function findKey(object, value) {
    for (const key of Object.keys(object)) {
        if (methods_1.methods.compare(object[key], value)) {
            return key;
        }
    }
    return null;
}
exports.findKey = findKey;
