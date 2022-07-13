import {ContextMethodInterface} from '../../interfaces/context-method.interface';
import {methods} from './index';


/**
 *
 * @method empty
 * Empty is: '', {}, [].
 * @param argument is any type
 * @returns {boolean}
 */
function EmptyMethod(argument: unknown): boolean {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    // console.log(context);
    if (methods.string(argument) || methods.object(argument) || methods.array(argument)) {
        return Object.keys(argument as object)?.length === 0;
    }
    return false;
}

export default EmptyMethod;
