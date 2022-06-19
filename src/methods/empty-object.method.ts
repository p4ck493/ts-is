import { UniversalEmptyCheckerMethod } from './universal-empty-checker.method';

/**
 *
 * @param argument is object type
 */
export function EmptyObjectMethod(argument: unknown): boolean {
  return UniversalEmptyCheckerMethod(argument);
}
