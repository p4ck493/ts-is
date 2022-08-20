import {methods} from './index';

/**
 * @method referenceError
 */
function ReferenceErrorMethod(argument: unknown): argument is ReferenceError {
    return methods.instanceof(argument, ReferenceError);
}

export default ReferenceErrorMethod;
