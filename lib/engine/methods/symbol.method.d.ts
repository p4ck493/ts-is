/**
 *
 * @method symbol
 * @example
 * is.symbol()
 * is.not.symbol()
 * is.all.symbol()
 * is.all.not.symbol()
 */
declare function SymbolMethod(argument: unknown): argument is symbol;
export default SymbolMethod;
