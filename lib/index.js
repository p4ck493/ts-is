"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = void 0;
const generator_1 = require("./engine/proxy/generator");
function defaultFunction(argument) {
    // TODO return typeof argument or make something cool
    return argument;
}
exports.is = (0, generator_1.proxyGenerator)(defaultFunction);
exports.default = exports.is;
