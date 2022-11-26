import {methods} from './index';

/**
 * @method evalError
 */
export function EvalErrorMethod(argument: unknown): argument is EvalError {
  return methods.instanceof(argument, EvalError);
}
