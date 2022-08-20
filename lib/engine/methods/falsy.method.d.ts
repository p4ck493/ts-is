/**
 *
 * @method falsy
 * @example
 * is.falsy()
 * is.not.falsy()
 * is.all.falsy()
 * is.all.not.falsy()
 */
declare function FalsyMethod(argument: unknown): argument is false;
export default FalsyMethod;
