/**
 *
 * @method truthy
 * @example
 * is.truthy()
 * is.not.truthy()
 * is.all.truthy()
 * is.all.not.truthy()
 */
declare function TruthyMethod(argument: unknown): argument is true;
export default TruthyMethod;
