"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerInIsDecorator = void 0;
const wrappers_1 = require("../wrappers");
const index_1 = require("../index");
function registerInIsDecorator(configuration) {
    return (constructor) => {
        if (index_1.Is.Object(configuration)) {
            Object.assign(wrappers_1.typeWrappers, { [configuration.className]: constructor });
        }
        else {
            const object = new constructor();
            Object.assign(wrappers_1.typeWrappers, { [object.constructor.name]: constructor });
        }
    };
}
exports.registerInIsDecorator = registerInIsDecorator;
