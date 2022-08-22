import {
  registerInIsArgumentDecoratorType,
  registerInIsConstructorDecoratorType,
  registerInIsDecoratorType,
} from '../types/decorators/register-in-is.decorator.type';
import { RegisterInIsDecoratorInterface } from '../interfaces/decorators/register-in-is.decorator.interface';
import { methods } from '../engine/methods';

function registerInIsDecorator(configuration?: RegisterInIsDecoratorInterface): registerInIsDecoratorType {
  return (constructor: registerInIsConstructorDecoratorType): void => {
    let value: any = constructor; // TODO interface
    if (configuration?.customMethod) {
      value = value?.[configuration.customMethod];
      if (!value) {
        throw new Error(`Not found customMethod with name: ${configuration.customMethod}`);
      }
    } else {
      // TODO add in case handle on result of execute function if not booelan that make somethink
      value = () => {
        return {
          classRef: constructor,
        };
      };
    }
    let className: string | undefined = configuration?.className;
    if (!className) {
      const object: registerInIsArgumentDecoratorType = new constructor();
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
