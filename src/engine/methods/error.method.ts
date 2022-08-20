import { methods } from './index';

/**
 * @method error
 */
function ErrorMethod(argument: unknown): argument is Error {
  return methods.instanceof(argument, Error);
}

export default ErrorMethod;
