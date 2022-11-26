import { methods } from './index';

export function WeakSetMethod<T extends object>(argument: unknown): argument is WeakSet<T> {
  return methods.instanceof(argument, WeakSet);
}
