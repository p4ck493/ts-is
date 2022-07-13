import {
    registerInIsArgumentDecoratorType,
    registerInIsConstructorDecoratorType,
    registerInIsDecoratorType,
} from '../types/decorators/register-in-is.decorator.type';
import {RegisterInIsDecoratorInterface} from '../interfaces/decorators/register-in-is.decorator.interface';
import methods from '../engine/methods';

function registerInIsDecorator(configuration?: RegisterInIsDecoratorInterface): registerInIsDecoratorType {
    return (constructor: registerInIsConstructorDecoratorType): void => {
        let method: any = constructor; // TODO interface
        let value: any = { // TODO interface
            useCustomMethod: false,
            method
        };
        if (configuration?.customMethod) {
            method = method?.[configuration.customMethod];
            if (!method) {
                throw new Error(`Not found customMethod with name: ${configuration.customMethod}`);
            }
            value = {
                useCustomMethod: true,
                method
            };
        }
        let className: string | undefined = configuration?.className;
        if (!className) {
            const object: registerInIsArgumentDecoratorType = new constructor();
            className = object.constructor.name;
        }
        Reflect.defineProperty(methods, className, {
            value
        });
    };
}

export default registerInIsDecorator;
