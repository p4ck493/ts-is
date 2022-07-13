import {RegisterInIs} from '../../decorators';


/**
 *
 * @method Symbol
 * @example
 * Is.Symbol()
 * Is.Not.Symbol()
 * Is.All.Symbol()
 * Is.All.Not.Symbol()
 */
@RegisterInIs({
    className: 'symbol',
    customMethod: 'method'
})
class SymbolMethod {
    /**
     *
     * @param argument
     */
    public static method(argument: unknown): argument is symbol {
        const context: SymbolMethod = this; // TODO ContextMethodInterface
        // console.log(context);
        return typeof argument === 'symbol';
    }
}

export default SymbolMethod;
