"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseForIsDecorator = void 0;
const wrappers_1 = require("../wrappers");
const UseForIsDecorator = (constructor) => {
    const object = new constructor(); // TODO interface
    Object.assign(wrappers_1.typeWrappers, { [object.constructor.name]: constructor });
};
exports.UseForIsDecorator = UseForIsDecorator;
