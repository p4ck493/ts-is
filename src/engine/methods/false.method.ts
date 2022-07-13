import {ContextMethodInterface} from '../../interfaces/context-method.interface';


/**
 *
 * @method False
 * @example
 * Is.False()
 * Is.Not.False()
 * Is.All.False()
 * Is.All.Not.False()
 */
function FalseMethod(argument: unknown): argument is false {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    // console.log(context);
    return argument === false;
}

export default FalseMethod;
