import {methods} from './index';

/**
 *
 * @method empty
 * Empty is: '', {}, [].
 * @param argument is any type
 */
function EmptyMethod(argument) {
    if (methods.string(argument) || methods.object(argument) || methods.array(argument)) {
        return Object.keys(argument)?.length === 0;
    }
    return false;
}
export default EmptyMethod;
