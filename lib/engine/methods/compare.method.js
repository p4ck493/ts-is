"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareMethod = exports.TypeOfValueEnum = void 0;
const array_method_1 = require("./array.method");
var TypeOfValueEnum;
(function (TypeOfValueEnum) {
    TypeOfValueEnum["object"] = "object";
})(TypeOfValueEnum = exports.TypeOfValueEnum || (exports.TypeOfValueEnum = {}));
function CompareMethod(objectOne, objectTwo) {
    var _a, _b;
    try {
        const keysOfObjectOne = (_a = Object.keys(objectOne !== null && objectOne !== void 0 ? objectOne : {})) !== null && _a !== void 0 ? _a : [];
        const keysOfObjectTwo = (_b = Object.keys(objectTwo !== null && objectTwo !== void 0 ? objectTwo : {})) !== null && _b !== void 0 ? _b : [];
        if (!(0, array_method_1.ArrayMethod)(keysOfObjectOne) || !(0, array_method_1.ArrayMethod)(keysOfObjectTwo)) {
            return false;
        }
        if (keysOfObjectOne.length !== keysOfObjectOne.length) {
            return false;
        }
        if (!keysOfObjectOne.length && !keysOfObjectTwo.length) {
            return true;
        }
        for (const keyOfObjectOne of keysOfObjectTwo) {
            switch (typeof objectOne[keyOfObjectOne]) {
                case TypeOfValueEnum.object:
                    if (!CompareMethod(objectOne[keyOfObjectOne], objectTwo[keyOfObjectOne])) {
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
    catch (e) {
        return false;
    }
}
exports.CompareMethod = CompareMethod;
