import {EmptyMethod} from './empty.method';
import {ObjectMethod} from './object.method';

/**
 *
 * @method EmptyArray
 * @param argument is object type
 * @returns {boolean}
 * @example
 * Is.EmptyArray()
 * Is.Not.EmptyArray()
 * Is.All.EmptyArray()
 * Is.All.Not.EmptyArray()
 */
export function EmptyArrayMethod(argument: unknown): boolean {
  if (ObjectMethod(argument)) {
    return EmptyMethod(argument);
  }
  return false;
}
