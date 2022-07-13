import {ContextMethodInterface} from '../../interfaces/context-method.interface';


/**
 *
 * @method Function
 * @example
 * Is.Function()
 * Is.Not.Function()
 * Is.All.Function()
 * Is.All.Not.Function()
 *
 * // With generic
 * Is.Function<PersonModel>()
 * Is.Not.Function<PersonModel>()
 * Is.All.Function<PersonModel>()
 * Is.All.Not.Function<PersonModel>()
 */
function FunctionMethod<T extends () => void>(argument: unknown): argument is T {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    // console.log(context);
    return {}.toString.call(argument) === '[object Function]';
}

export default FunctionMethod;
