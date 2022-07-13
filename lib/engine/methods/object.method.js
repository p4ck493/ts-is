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
const null_method_1 = __importDefault(require("./null.method"));
/**
 *
 * @method Object
 * @example
 * Is.Object()
 * Is.Not.Object()
 * Is.All.Object()
 * Is.All.Not.Object()
 *
 * // Or with generic
 * Is.Object<PersonModel>()
 * Is.Not.Object<PersonModel>()
 * Is.All.Object<PersonModel>()
 * Is.All.Not.Object<PersonModel>()
 */
let ObjectMethod = class ObjectMethod {
    /**
     *
     * @param argument
     */
    static method(argument) {
        const context = this; // TODO ContextMethodInterface
        // console.log(context);
        return typeof argument === 'object' && !array_method_1.default.method(argument) && !null_method_1.default.method(argument);
    }
};
ObjectMethod = __decorate([
    (0, decorators_1.RegisterInIs)({
        className: 'object',
        customMethod: 'method'
    })
], ObjectMethod);
exports.default = ObjectMethod;
