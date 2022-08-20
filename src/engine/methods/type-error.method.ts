import { methods } from './index';

/**
 * @method typeError
 */
function TypeErrorMethod(argument: unknown): argument is TypeError {
  return methods.instanceof(argument, TypeError);
}

export default TypeErrorMethod;
