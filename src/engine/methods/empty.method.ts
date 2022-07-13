import ArrayMethod from './array.method';
import {RegisterInIs} from '../../decorators';
import ObjectMethod from './object.method';
import StringMethod from './string.method';


/**
 *
 * @method empty
 * Empty is: '', {}, [].
 * @param argument is any type
 * @returns {boolean}
 */
@RegisterInIs({
    className: 'empty',
    customMethod: 'method'
})
class EmptyMethod {
    /**
     *
     * @param argument
     */
    public static method(argument: unknown): boolean {
        const context: EmptyMethod = this; // TODO ContextMethodInterface
        // console.log(context);
        if (StringMethod.method(argument) || ObjectMethod.method(argument) || ArrayMethod.method(argument)) {
            return Object.keys(argument as object)?.length === 0;
        }
        return false;
    }
}

export default EmptyMethod;
