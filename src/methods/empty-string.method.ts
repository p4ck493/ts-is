import {EmptyMethod} from './empty.method';
import {StringMethod} from './string.method';

/**
 *
 * @method EmptyString
 * @param argument is string type
 * @example
 * Is.EmptyString()
 * Is.Not.EmptyString()
 * Is.All.EmptyString()
 * Is.All.Not.EmptyString()
 */
export function EmptyStringMethod(argument: unknown): boolean {
  if (StringMethod(argument)) {
    return EmptyMethod(argument);
  }
  return false;
}
