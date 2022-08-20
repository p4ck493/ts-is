import { methods } from './index';

/**
 * @method syntaxError
 */
function SyntaxErrorMethod(argument: unknown): argument is SyntaxError {
  return methods.instanceof(argument, SyntaxError);
}

export default SyntaxErrorMethod;
