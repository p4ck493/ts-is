import { methods } from './index';

/**
 * @method URIError
 */
function URIErrorMethod(argument: unknown): argument is URIError {
  return methods.instanceof(argument, URIError);
}

export default URIErrorMethod;
