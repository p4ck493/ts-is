import {FalsyMethod} from './falsy.method';

/**
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Truthy}
 *
 * @param {unknown} argument
 * @example
 * Is.Truthy()
 * Is.Not.Truthy()
 * Is.All.Truthy()
 * Is.All.Not.Truthy()
 */
export function TruthyMethod(argument: unknown): argument is true {
  return !FalsyMethod(argument);
}
