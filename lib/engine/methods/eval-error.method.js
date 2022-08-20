import {methods} from './index';

/**
 * @method evalError
 */
function EvalErrorMethod(argument) {
    return methods.instanceof(argument, EvalError);
}
export default EvalErrorMethod;
