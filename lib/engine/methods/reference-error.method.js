import {methods} from './index';

/**
 * @method referenceError
 */
function ReferenceErrorMethod(argument) {
    return methods.instanceof(argument, ReferenceError);
}
export default ReferenceErrorMethod;
