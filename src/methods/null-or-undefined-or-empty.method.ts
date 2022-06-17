import { UniversalEmptyCheckerMethod } from './universal-empty-checker.method';

/**
 *
 * @param argument is any type
 */
export function NullOrUndefinedOrEmptyMethod(argument: any): boolean {
  return UniversalEmptyCheckerMethod(argument);
}
