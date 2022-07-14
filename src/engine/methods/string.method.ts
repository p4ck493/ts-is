/**
 *
 * @method String
 * @example
 * Is.String()
 * Is.Not.String()
 * Is.All.String()
 * Is.All.Not.String()
 */

function StringMethod(argument: unknown): argument is string {
    return typeof argument === 'string';
}

export default StringMethod
