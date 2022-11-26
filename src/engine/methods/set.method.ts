import { methods } from './index';

export function SetMethod<T = any>(argument: unknown): argument is Set<T> {
  return methods.instanceof(argument, Set<T>);
}
