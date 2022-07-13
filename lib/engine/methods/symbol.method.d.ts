/**
 *
 * @method Symbol
 * @example
 * Is.Symbol()
 * Is.Not.Symbol()
 * Is.All.Symbol()
 * Is.All.Not.Symbol()
 */
declare class SymbolMethod {
    /**
     *
     * @param argument
     */
    static method(argument: unknown): argument is symbol;
}
export default SymbolMethod;
