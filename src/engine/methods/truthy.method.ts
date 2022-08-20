import {methods} from './index';

/**
 *
 * @method truthy
 * @example
 * is.truthy()
 * is.not.truthy()
 * is.all.truthy()
 * is.all.not.truthy()
 */
function TruthyMethod(argument: unknown): argument is true {
  return !methods.falsy(argument);
}

export default TruthyMethod;
