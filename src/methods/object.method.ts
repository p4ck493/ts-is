import { ArrayMethod } from './array.method';
import { NullMethod } from './null.method';

/**
 * ObjectMethod is an Object
 * @param argument is any type
 */
export function ObjectMethod(argument: unknown): argument is object {
  return typeof argument === 'object' && !ArrayMethod(argument) && !NullMethod(argument);
}
