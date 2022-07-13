import {ContextMethodInterface} from '../../interfaces/context-method.interface';


/**
 *
 * @method undefined
 * @example
 * Is.undefined()
 * Is.Not.undefined()
 * Is.All.undefined()
 * Is.All.Not.undefined()
 */
function UndefinedMethod(argument: unknown): argument is undefined {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    // console.log(context);
    return argument === undefined;
}

export default UndefinedMethod;
