import {ContextMethodInterface} from '../../interfaces/context-method.interface';

/**
 *
 * @method Null
 * @example
 * Is.Null()
 * Is.Not.Null()
 * Is.All.Null()
 * Is.All.Not.Null()
 */
function NullMethod(argument: unknown): argument is null {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    // console.log(context);
    return argument === null;
}

export default NullMethod;
