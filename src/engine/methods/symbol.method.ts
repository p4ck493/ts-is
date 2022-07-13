import {ContextMethodInterface} from '../../interfaces/context-method.interface';


/**
 *
 * @method Symbol
 * @example
 * Is.Symbol()
 * Is.Not.Symbol()
 * Is.All.Symbol()
 * Is.All.Not.Symbol()
 */
function SymbolMethod(argument: unknown): argument is symbol {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    // console.log(context);
    return typeof argument === 'symbol';
}

export default SymbolMethod;
