import { UniversalEmptyCheckerMethod } from './universal-empty-checker.method';

/**
 *
 * @param argument is object type
 */
export function EmptyObjectMethod(argument: object): boolean {
  return UniversalEmptyCheckerMethod(argument);
}
