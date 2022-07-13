"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function StringMethod(argument) {
    console.log('argument', argument, typeof argument === 'string');
    const context = this; // TODO ContextMethodInterface
    console.log('context', context);
    return typeof argument === 'string';
}
exports.default = StringMethod;
