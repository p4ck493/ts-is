"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareMethod = exports.TypeOfValueEnum = void 0;
const null_or_undefined_method_1 = require("./null-or-undefined.method");
const index_1 = require("../index");
var TypeOfValueEnum;
(function (TypeOfValueEnum) {
    TypeOfValueEnum["object"] = "object";
})(TypeOfValueEnum = exports.TypeOfValueEnum || (exports.TypeOfValueEnum = {}));
/**
 *
 * @param objectOne is generic type
 * @param objectTwo is generic type
 */
function CompareMethod(objectOne, objectTwo) {
    var _a, _b;
    if ((0, null_or_undefined_method_1.NullOrUndefinedMethod)(objectOne) || (0, null_or_undefined_method_1.NullOrUndefinedMethod)(objectTwo)) {
        return false;
    }
    const keysOfObjectOne = (_a = Object.keys(objectOne)) !== null && _a !== void 0 ? _a : [];
    const keysOfObjectTwo = (_b = Object.keys(objectTwo)) !== null && _b !== void 0 ? _b : [];
    if (!(keysOfObjectOne === null || keysOfObjectOne === void 0 ? void 0 : keysOfObjectOne.length) || !(keysOfObjectTwo === null || keysOfObjectTwo === void 0 ? void 0 : keysOfObjectTwo.length)) {
        return false;
    }
    if (keysOfObjectOne.length !== keysOfObjectOne.length) {
        return false;
    }
    for (const keyOfObjectOne of keysOfObjectTwo) {
        switch (typeof objectOne[keyOfObjectOne]) {
            case TypeOfValueEnum.object:
                if (index_1.Is.Not.Compare(objectOne[keyOfObjectOne], objectTwo[keyOfObjectOne])) {
                    return false;
                }
                break;
            default:
                if (objectOne[keyOfObjectOne] !== objectTwo[keyOfObjectOne]) {
                    return false;
                }
                break;
        }
    }
    return true;
}
exports.CompareMethod = CompareMethod;
