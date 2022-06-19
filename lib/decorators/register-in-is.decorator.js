"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerInIsDecorator = void 0;
const wrappers_1 = require("../wrappers");
const object_method_1 = require("../methods/object.method");
function registerInIsDecorator(configuration) {
    return (constructor) => {
        if ((0, object_method_1.ObjectMethod)(configuration)) {
            Object.assign(wrappers_1.modelWrappers, { [configuration.className]: constructor });
        }
        else {
            const object = new constructor();
            Object.assign(wrappers_1.modelWrappers, { [object.constructor.name]: constructor });
        }
    };
}
exports.registerInIsDecorator = registerInIsDecorator;
