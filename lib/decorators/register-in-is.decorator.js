"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerInIsDecorator = void 0;
const methods_1 = require("../engine/methods");
function registerInIsDecorator(configuration) {
    return (constructor) => {
        let value = constructor;
        if (configuration === null || configuration === void 0 ? void 0 : configuration.customMethod) {
            value = value === null || value === void 0 ? void 0 : value[configuration.customMethod];
            if (!value) {
                throw new Error(`Not found customMethod with name: ${configuration.customMethod}`);
            }
        }
        else {
            value = () => {
                return {
                    classRef: constructor,
                };
            };
        }
        let className = configuration === null || configuration === void 0 ? void 0 : configuration.className;
        if (!className) {
            const object = new constructor();
            className = object.constructor.name;
        }
        Object.defineProperty(methods_1.methods, className, {
            configurable: true,
            enumerable: true,
            writable: true,
            value,
        });
    };
}
exports.registerInIsDecorator = registerInIsDecorator;
