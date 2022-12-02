import {
  registerInIsArgumentDecoratorType,
  registerInIsConstructorDecoratorType,
} from '../types/decorators/register-in-is.decorator.type';
import { RegisterInIsDecoratorInterface } from '../interfaces/decorators/register-in-is.decorator.interface';
import { methods } from '../engine/methods';

export function registerInIsDecorator(configuration?: RegisterInIsDecoratorInterface): any {
  return (constructor: registerInIsConstructorDecoratorType): void => {
    let value: any = constructor;
    if (configuration?.customMethod) {
      value = value?.[configuration.customMethod];
      if (!value) {
        throw new Error(`Not found customMethod with name: ${configuration.customMethod}`);
      }
    } else {
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
