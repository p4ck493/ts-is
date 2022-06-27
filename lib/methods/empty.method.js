"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyMethod = void 0;
/**
 *
 * @method empty
 * Empty is: '', {}, [].
 * @param argument is any type
 * @returns {boolean}
 */
const string_method_1 = require("./string.method");
const object_method_1 = require("./object.method");
const array_method_1 = require("./array.method");
function EmptyMethod(argument) {
    var _a;
    if ((0, string_method_1.StringMethod)(argument) || (0, object_method_1.ObjectMethod)(argument) || (0, array_method_1.ArrayMethod)(argument)) {
        return ((_a = Object.keys(argument)) === null || _a === void 0 ? void 0 : _a.length) === 0;
    }
    return false;
}
exports.EmptyMethod = EmptyMethod;
