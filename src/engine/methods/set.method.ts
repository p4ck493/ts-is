import { methods } from './index';

/**
 * @method date
 */
function SetMethod<T = any>(argument: unknown): argument is Set<T> {
  return methods.instanceof(argument, Set<T>);
}

export default SetMethod;
