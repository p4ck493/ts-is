import {ObjectMethod} from './object.method';
import {InstanceofMethod} from './instanceof.method';

export function PromiseMethod<T>(argument: unknown): argument is Promise<T> {
  if (ObjectMethod(argument) && Reflect.has(argument, 'then') && Reflect.has(argument, 'catch')) {
    return InstanceofMethod((argument as any)?.then, Function) && InstanceofMethod((argument as any)?.catch, Function);
  }
  return false;
}
