import {EmptyMethod} from './empty.method';
import {ObjectMethod} from './object.method';

/**
 *
 * @method EmptyObject
 * @param argument is object type
 * @returns {boolean}
 * @example
 * Is.EmptyObject()
 * Is.Not.EmptyObject()
 * Is.All.EmptyObject()
 * Is.All.Not.EmptyObject()
 */
export function EmptyObjectMethod(argument: unknown): boolean {
  if (ObjectMethod(argument)) {
    return EmptyMethod(argument);
  }
  return false;
}
