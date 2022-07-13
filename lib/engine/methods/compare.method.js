"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOfValueEnum = void 0;
const decorators_1 = require("../../decorators");
const null_method_1 = __importDefault(require("./null.method"));
const undefined_method_1 = __importDefault(require("./undefined.method"));
const array_method_1 = __importDefault(require("./array.method"));
var TypeOfValueEnum;
(function (TypeOfValueEnum) {
    TypeOfValueEnum["object"] = "object";
})(TypeOfValueEnum = exports.TypeOfValueEnum || (exports.TypeOfValueEnum = {}));
let CompareMethod = class CompareMethod {
    /**
     *
     * @method Compare
     * @param objectOne is generic type
     * @param objectTwo is generic type
     */
    static method(objectOne, objectTwo) {
        var _a, _b;
        const context = this; // TODO ContextMethodInterface
        // console.log(context);
        if (null_method_1.default.method(objectOne) ||
            undefined_method_1.default.method(objectOne) ||
            null_method_1.default.method(objectTwo) ||
            undefined_method_1.default.method(objectTwo)) {
            return false;
        }
        const keysOfObjectOne = (_a = Object.keys(objectOne)) !== null && _a !== void 0 ? _a : [];
        const keysOfObjectTwo = (_b = Object.keys(objectTwo)) !== null && _b !== void 0 ? _b : [];
        if (!array_method_1.default.method(keysOfObjectOne) || !array_method_1.default.method(keysOfObjectTwo)) {
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
                    if (!this.method(objectOne[keyOfObjectOne], objectTwo[keyOfObjectOne])) {
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
};
CompareMethod = __decorate([
    (0, decorators_1.RegisterInIs)({
        className: 'compare',
        customMethod: 'method'
    })
], CompareMethod);
exports.default = CompareMethod;
