import { methods } from './index';

export function WeakMapMethod<T extends object, V>(argument: unknown): argument is WeakMap<T, V> {
  return methods.instanceof(argument, WeakMap<T, V>);
}
