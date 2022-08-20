import {methods} from './index';

/**
 * @method typeError
 */
function TypeErrorMethod(argument) {
    return methods.instanceof(argument, TypeError);
}
export default TypeErrorMethod;
