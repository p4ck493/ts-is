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
const array_method_1 = __importDefault(require("./array.method"));
const decorators_1 = require("../../decorators");
const object_method_1 = __importDefault(require("./object.method"));
const string_method_1 = __importDefault(require("./string.method"));
/**
 *
 * @method empty
 * Empty is: '', {}, [].
 * @param argument is any type
 * @returns {boolean}
 */
let EmptyMethod = class EmptyMethod {
    /**
     *
     * @param argument
     */
    static method(argument) {
        var _a;
        const context = this; // TODO ContextMethodInterface
        // console.log(context);
        if (string_method_1.default.method(argument) || object_method_1.default.method(argument) || array_method_1.default.method(argument)) {
            return ((_a = Object.keys(argument)) === null || _a === void 0 ? void 0 : _a.length) === 0;
        }
        return false;
    }
};
EmptyMethod = __decorate([
    (0, decorators_1.RegisterInIs)({
        className: 'empty',
        customMethod: 'method'
    })
], EmptyMethod);
exports.default = EmptyMethod;
