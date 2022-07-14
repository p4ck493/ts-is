


/**
 *
 * @method Number
 * @example
 * Is.Number()
 * Is.Not.Number()
 * Is.All.Number()
 * Is.All.Not.Number()
 */
function NumberMethod(argument: unknown): argument is number {
    return typeof argument === 'number' && !isNaN(argument);
}

export default NumberMethod;
