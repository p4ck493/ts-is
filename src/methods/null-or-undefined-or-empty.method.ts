import { EmptyMethod } from './empty.method';

/**
 *
 * @param argument is any type
 */
export function NullOrUndefinedOrEmptyMethod(argument: unknown): boolean {
  return EmptyMethod(argument);
}
