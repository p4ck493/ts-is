import {methods} from './index';

/**
 * @method error
 */
function ErrorMethod(argument) {
    return methods.instanceof(argument, Error);
}
export default ErrorMethod;
