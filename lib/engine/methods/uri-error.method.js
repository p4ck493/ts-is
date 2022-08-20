import {methods} from './index';

/**
 * @method URIError
 */
function URIErrorMethod(argument) {
    return methods.instanceof(argument, URIError);
}
export default URIErrorMethod;
