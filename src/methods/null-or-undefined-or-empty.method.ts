import {EmptyMethod} from './empty.method';

/**
 *
 * @param {unknown} argument
 * @example
 * Is.NullOrUndefinedOrEmpty()
 * Is.Not.NullOrUndefinedOrEmpty()
 * Is.All.NullOrUndefinedOrEmpty()
 * Is.All.Not.NullOrUndefinedOrEmpty()
 */
export function NullOrUndefinedOrEmptyMethod(argument: unknown): boolean {
  return EmptyMethod(argument);
}
