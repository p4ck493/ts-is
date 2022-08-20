import {methods} from './index';

/**
 *
 * @method empty
 * Empty is: '', {}, [], new Map().
 * @param argument is any type
 */
function EmptyMethod(argument) {
    if (methods.string(argument) || methods.object(argument) || methods.array(argument)) {
        if (methods.map(argument)) {
            return argument.size === 0;
        }
        return Object.keys(argument)?.length === 0;
    }
    return false;
}
export default EmptyMethod;
