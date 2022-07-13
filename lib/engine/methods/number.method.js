"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("../../decorators");
/**
 *
 * @method Number
 * @example
 * Is.Number()
 * Is.Not.Number()
 * Is.All.Number()
 * Is.All.Not.Number()
 */
let NumberMethod = class NumberMethod {
    /**
     *
     * @param argument
     */
    static method(argument) {
        const context = this; // TODO ContextMethodInterface
        // console.log(context);
        return typeof argument === 'number' && !isNaN(argument);
    }
};
NumberMethod = __decorate([
    (0, decorators_1.RegisterInIs)({
        className: 'number',
        customMethod: 'method'
    })
], NumberMethod);
exports.default = NumberMethod;
