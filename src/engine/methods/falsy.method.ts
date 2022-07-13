import {ContextMethodInterface} from '../../interfaces/context-method.interface';


/**
 *
 * @method Falsy
 * @example
 * Is.Falsy()
 * Is.Not.Falsy()
 * Is.All.Falsy()
 * Is.All.Not.Falsy()
 */
function FalsyMethod(argument: unknown): argument is false {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    // console.log(context);
    return !argument;
}

export default FalsyMethod;
