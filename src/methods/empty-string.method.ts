import { EmptyMethod } from './empty.method';
import { StringMethod } from './string.method';

/**
 *
 * @param argument is string type
 */
export function EmptyStringMethod(argument: unknown): boolean {
  if (StringMethod(argument)) {
    return EmptyMethod(argument);
  }
  return false;
}
