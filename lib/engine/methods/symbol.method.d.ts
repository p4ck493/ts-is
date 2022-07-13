/**
 *
 * @method Symbol
 * @example
 * Is.Symbol()
 * Is.Not.Symbol()
 * Is.All.Symbol()
 * Is.All.Not.Symbol()
 */
declare function SymbolMethod(argument: unknown): argument is symbol;
export default SymbolMethod;
