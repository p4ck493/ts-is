"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Is = void 0;
const generator_1 = require("./engine/proxy/generator");
function IsFunction(argument) {
    // console.error('Dont use the function, is declare for future!');
    return argument;
}
/**
 * Export all methods in Is object with Not object inside.
 * If you need check if true is true, just use this: Is.TrueMethod(value);
 * If you need check if true is not true just use this: Is.Not.TrueMethod(value);
 */
exports.Is = (0, generator_1.proxyGenerator)(IsFunction);
