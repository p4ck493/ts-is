import { ArrayMethod } from './array.method';
import { NullMethod } from './null.method';

/**
 * ObjectMethod is an Object
 * @param argument is any type
 */
export function ObjectMethod<T extends object>(argument: unknown): argument is T {
  return typeof argument === 'object' && !ArrayMethod(argument) && !NullMethod(argument);
}
