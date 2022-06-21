import {FalsyMethod} from './falsy.method';

/**
 *
 * @param argument is boolean type
 */
export function TruthyMethod(argument: unknown): argument is true {
  return !FalsyMethod(argument);
}
