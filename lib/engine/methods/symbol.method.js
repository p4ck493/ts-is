/**
 *
 * @method symbol
 * @example
 * is.symbol()
 * is.not.symbol()
 * is.all.symbol()
 * is.all.not.symbol()
 */
function SymbolMethod(argument) {
    return typeof argument === 'symbol';
}
export default SymbolMethod;
