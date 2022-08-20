import {methods} from './index';

/**
 * @method evalError
 */
function EvalErrorMethod(argument: unknown): argument is EvalError {
    return methods.instanceof(argument, EvalError);
}

export default EvalErrorMethod;
