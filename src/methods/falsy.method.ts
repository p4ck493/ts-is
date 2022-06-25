/**
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Falsy}
 *
 * @param {unknown} argument
 * @example
 * Is.Falsy()
 * Is.Not.Falsy()
 * Is.All.Falsy()
 * Is.All.Not.Falsy()
 */
export function FalsyMethod(argument: unknown): argument is false {
  return !argument;
}
