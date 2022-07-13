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
const decorators_1 = require("../../decorators");
const function_method_1 = __importDefault(require("./function.method"));
/**
 *
 *
 * @method Array
 *
 * @example
 * @RegisterInIs
 * class Person {
 *
 * }
 *
 * Is.Person.Array([new Person()]) // Returns true
 * Is.Person.Array([new Address()]) // Returns false
 * Is.Array([new Address()]) // Returns true
 * Is.Array([]) // Returns true
 * Is.Not.Array([]) // Returns false
 * Is.Not.Array(0) // Returns true
 * Is.Not.Array(true) // Returns true
 * Is.Not.Array('Hello world') // Returns true
 *
 * // Special cases:
 *
 * // Case #1
 * const arr: Person[] = [];
 * Is.Person.Array(arr) // Returns false because it is an empty array, but for: Is.Array(arr) returns true!
 *
 * // Case #2
 * Is.Not.Person.Array(arr) // Returns true
 *
 */
let ArrayMethod = class ArrayMethod {
    /**
     *
     * @param argument
     * @param classRef TODO change argument "classRef" to array of function: [PersonModel, Symbol, Boolean, Number, ...]
     */
    static method(argument, classRef) {
        const context = this; // TODO ContextMethodInterface
        // console.log(context);
        if (argument instanceof Array) {
            if (function_method_1.default.method(classRef)) {
                if (argument.length) {
                    return argument.every((item) => item instanceof classRef);
                }
                else {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
};
ArrayMethod = __decorate([
    (0, decorators_1.RegisterInIs)({
        className: 'array',
        customMethod: 'method'
    })
], ArrayMethod);
exports.default = ArrayMethod;
