/**
 *
 * @method Boolean
 * @example
 * Is.Boolean()
 * Is.Not.Boolean()
 * Is.All.Boolean()
 * Is.All.Not.Boolean()
 */
declare class BooleanMethod {
    /**
     *
     * @param argument
     */
    static method(argument: unknown): argument is boolean;
}
export default BooleanMethod;
