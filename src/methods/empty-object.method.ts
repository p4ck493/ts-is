import { EmptyMethod } from './empty.method';
import { ObjectMethod } from './object.method';

/**
 *
 * @param argument is object type
 */
export function EmptyObjectMethod(argument: unknown): boolean {
  if (ObjectMethod(argument)) {
    return EmptyMethod(argument);
  }
  return false;
}
