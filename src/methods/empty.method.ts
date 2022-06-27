/**
 *
 * @method empty
 * Empty is: '', {}, [].
 * @param argument is any type
 * @returns {boolean}
 */
import { StringMethod } from './string.method';
import { ObjectMethod } from './object.method';
import { ArrayMethod } from './array.method';

export function EmptyMethod(argument: unknown): boolean {
  if (StringMethod(argument) || ObjectMethod(argument) || ArrayMethod(argument)) {
    return Object.keys(argument as object)?.length === 0;
  }
  return false;
}
