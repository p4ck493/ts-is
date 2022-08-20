import {methods} from '../engine/methods/index';

function registerInIsDecorator(configuration) {
    return (constructor) => {
        let value = constructor; // TODO interface
        if (configuration?.customMethod) {
            value = value?.[configuration.customMethod];
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
        let className = configuration?.className;
        if (!className) {
            const object = new constructor();
            className = object.constructor.name;
        }
        Object.defineProperty(methods, className, {
            configurable: true,
            enumerable: true,
            writable: true,
            value,
        });
    };
}
export default registerInIsDecorator;
