


/**
 *
 * @method Boolean
 * @example
 * Is.Boolean()
 * Is.Not.Boolean()
 * Is.All.Boolean()
 * Is.All.Not.Boolean()
 */
function BooleanMethod(argument: unknown): argument is boolean {
    return typeof argument === 'boolean';
}

export default BooleanMethod;
