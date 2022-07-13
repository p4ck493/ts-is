import ArrayMethod from './array.method';
import {RegisterInIs} from '../../decorators';
import NullMethod from './null.method';


/**
 *
 * @method Object
 * @example
 * Is.Object()
 * Is.Not.Object()
 * Is.All.Object()
 * Is.All.Not.Object()
 *
 * // Or with generic
 * Is.Object<PersonModel>()
 * Is.Not.Object<PersonModel>()
 * Is.All.Object<PersonModel>()
 * Is.All.Not.Object<PersonModel>()
 */
@RegisterInIs({
    className: 'object',
    customMethod: 'method'
})
class ObjectMethod {
    /**
     *
     * @param argument
     */
    public static method<T extends object>(argument: unknown): argument is T {
        const context: ObjectMethod = this; // TODO ContextMethodInterface
        console.log(context);
        return typeof argument === 'object' && !ArrayMethod.method(argument) && !NullMethod.method(argument);
    }
}

export default ObjectMethod;
