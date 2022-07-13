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
 * @method Falsy
 * @example
 * Is.Falsy()
 * Is.Not.Falsy()
 * Is.All.Falsy()
 * Is.All.Not.Falsy()
 */
let FalsyMethod = class FalsyMethod {
    /**
     *
     * @param argument
     */
    static method(argument) {
        const context = this; // TODO ContextMethodInterface
        // console.log(context);
        return !argument;
    }
};
FalsyMethod = __decorate([
    (0, decorators_1.RegisterInIs)({
        className: 'falsy',
        customMethod: 'method'
    })
], FalsyMethod);
exports.default = FalsyMethod;
