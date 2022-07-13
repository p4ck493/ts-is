import {RegisterInIs} from '../../decorators';


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
@RegisterInIs({
    className: 'function',
    customMethod: 'method'
})
class FunctionMethod {
    /**
     *
     * @param argument
     */
    public static method<T extends () => void>(argument: unknown): argument is T {
        const context: FunctionMethod = this; // TODO ContextMethodInterface
        // console.log(context);
        return {}.toString.call(argument) === '[object Function]';
    }
}

export default FunctionMethod;
