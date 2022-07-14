import {methods} from './index';

/**
 *
 *
 * @method Truthy
 * @example
 * Is.Truthy()
 * Is.Not.Truthy()
 * Is.All.Truthy()
 * Is.All.Not.Truthy()
 */
function TruthyMethod(argument: unknown): argument is true {
  return !methods.falsy(argument);
}

export default TruthyMethod;
