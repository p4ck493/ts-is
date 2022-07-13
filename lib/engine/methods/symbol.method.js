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
 * @method Symbol
 * @example
 * Is.Symbol()
 * Is.Not.Symbol()
 * Is.All.Symbol()
 * Is.All.Not.Symbol()
 */
let SymbolMethod = class SymbolMethod {
    /**
     *
     * @param argument
     */
    static method(argument) {
        const context = this; // TODO ContextMethodInterface
        // console.log(context);
        return typeof argument === 'symbol';
    }
};
SymbolMethod = __decorate([
    (0, decorators_1.RegisterInIs)({
        className: 'symbol',
        customMethod: 'method'
    })
], SymbolMethod);
exports.default = SymbolMethod;
