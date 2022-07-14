/**
 *
 * @method undefined
 * @example
 * Is.undefined()
 * Is.Not.undefined()
 * Is.All.undefined()
 * Is.All.Not.undefined()
 */
function UndefinedMethod(argument: unknown): argument is undefined {
    return argument === undefined;
}

export default UndefinedMethod;
