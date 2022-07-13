"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../engine/methods");
function registerInIsDecorator(configuration) {
    return (constructor) => {
        let value = constructor; // TODO interface
        if (configuration === null || configuration === void 0 ? void 0 : configuration.customMethod) {
            value = value === null || value === void 0 ? void 0 : value[configuration.customMethod];
            if (!value) {
                throw new Error(`Not found customMethod with name: ${configuration.customMethod}`);
            }
        }
        else {
            // TODO add in case handle on result of execute function if not booelan that make somethink
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
            value
        });
    };
}
exports.default = registerInIsDecorator;
