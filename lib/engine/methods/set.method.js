import {methods} from './index';

/**
 * @method date
 */
function SetMethod(argument) {
    return methods.instanceof(argument, (Set));
}
export default SetMethod;
