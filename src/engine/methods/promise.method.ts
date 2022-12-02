import { ObjectMethod } from './object.method';
import { FunctionMethod } from './function.method';

export function PromiseMethod<T>(argument: unknown): argument is Promise<T> {
  if (ObjectMethod(argument) && Reflect.has(argument, 'then') && Reflect.has(argument, 'catch')) {
    return FunctionMethod((argument as any)?.then) && FunctionMethod((argument as any)?.catch);
  }
  return false;
}
