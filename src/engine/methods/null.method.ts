/**
 *
 * @method Null
 * @example
 * Is.Null()
 * Is.Not.Null()
 * Is.All.Null()
 * Is.All.Not.Null()
 */
function NullMethod(argument: unknown): argument is null {
    return argument === null;
}

export default NullMethod;
