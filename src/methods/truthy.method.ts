import { FalsyMethod } from './falsy.method';

/**
 *
 *
 * @method Truthy
 * @example
 * Is.Truthy()
 * Is.Not.Truthy()
 * Is.All.Truthy()
 * Is.All.Not.Truthy()
 */
export function TruthyMethod(argument: unknown): argument is true {
  return !FalsyMethod(argument);
}
