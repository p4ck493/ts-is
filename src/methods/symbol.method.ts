/**
 *
 * @param argument is any type
 */
export function SymbolMethod(argument: any): argument is symbol {
  return typeof argument === 'symbol';
}
