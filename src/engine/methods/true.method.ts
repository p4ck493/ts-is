/**
 *
 * @method True
 * @example
 * Is.True()
 * Is.Not.True()
 * Is.All.True()
 * Is.All.Not.True()
 */
function TrueMethod(argument: unknown): argument is true {
    return argument === true;
}

export default TrueMethod;
