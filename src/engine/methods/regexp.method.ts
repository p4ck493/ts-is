import { methods } from './index';

/**
 * @method regExp
 */
function RegExpMethod(argument: unknown): argument is RegExp {
  return methods.instanceof(argument, RegExp);
}

export default RegExpMethod;
