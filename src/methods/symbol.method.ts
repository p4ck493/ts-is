/**
 *
 * @method Symbol
 * @example
 * Is.Symbol()
 * Is.Not.Symbol()
 * Is.All.Symbol()
 * Is.All.Not.Symbol()
 */
export function SymbolMethod(argument: unknown): argument is symbol {
  return typeof argument === 'symbol';
}
