/**
 *
 * @method String
 * @example
 * Is.String()
 * Is.Not.String()
 * Is.All.String()
 * Is.All.Not.String()
 */
declare function StringMethod(argument: unknown): argument is string;
export default StringMethod;
