import {typeWrappers} from '../wrappers';
import {
    registerInIsArgumentDecoratorType,
    registerInIsConstructorDecoratorType,
    registerInIsDecoratorType
} from '../types/decorators/register-in-is.decorator.type';
import {RegisterInIsDecoratorInterface} from '../interfaces/decorators/register-in-is.decorator.interface';
import {ObjectMethod} from '../methods/object.method';

export function registerInIsDecorator(configuration?: RegisterInIsDecoratorInterface): registerInIsDecoratorType {

    return (constructor: registerInIsConstructorDecoratorType): void => {

        if (ObjectMethod(configuration)) {
            Object.assign(typeWrappers, {[configuration.className]: constructor});
        } else {
            const object: registerInIsArgumentDecoratorType = new constructor();
            Object.assign(typeWrappers, {[object.constructor.name]: constructor});
        }

    }

}
