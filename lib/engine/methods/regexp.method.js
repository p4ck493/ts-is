import {methods} from './index';

/**
 * @method regExp
 */
function RegExpMethod(argument) {
    return methods.instanceof(argument, RegExp);
}
export default RegExpMethod;
