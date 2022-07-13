"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findKey = void 0;
const compare_method_1 = __importDefault(require("../engine/methods/compare.method"));
// TODO guard on arguments
// TODO create another report for the method
function findKey(object, value) {
    for (const key of Object.keys(object)) {
        if (compare_method_1.default.method(object[key], value)) {
            return key;
        }
    }
    return null;
}
exports.findKey = findKey;
