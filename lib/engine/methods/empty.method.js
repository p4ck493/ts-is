"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyMethod = void 0;
const string_method_1 = require("./string.method");
const object_method_1 = require("./object.method");
const array_method_1 = require("./array.method");
const instanceof_method_1 = require("./instanceof.method");
function EmptyMethod(argument) {
    var _a;
    if ((0, string_method_1.StringMethod)(argument) || (0, object_method_1.ObjectMethod)(argument) || (0, array_method_1.ArrayMethod)(argument)) {
        if ((0, instanceof_method_1.InstanceofMethod)(argument, Map)) {
            return argument.size === 0;
        }
        return ((_a = Object.keys(argument)) === null || _a === void 0 ? void 0 : _a.length) === 0;
    }
    return false;
}
exports.EmptyMethod = EmptyMethod;
