import { UniversalEmptyCheckerMethod } from './universal-empty-checker.method';

/**
 *
 * @param argument is string type
 */
export function EmptyStringMethod(argument: unknown): boolean {
  return UniversalEmptyCheckerMethod(argument);
}
