/**
 *
 * @method False
 * @example
 * Is.False()
 * Is.Not.False()
 * Is.All.False()
 * Is.All.Not.False()
 */
function FalseMethod(argument: unknown): argument is false {
    return argument === false;
}

export default FalseMethod;
