import {RegisterInIs} from '../../decorators';


/**
 *
 * @method Boolean
 * @example
 * Is.Boolean()
 * Is.Not.Boolean()
 * Is.All.Boolean()
 * Is.All.Not.Boolean()
 */

@RegisterInIs({
    className: 'boolean',
    customMethod: 'method'
})
class BooleanMethod {
    /**
     *
     * @param argument
     */
    public static method(argument: unknown): argument is boolean {
        const context: BooleanMethod = this; // TODO ContextMethodInterface
        // console.log(context);
        return typeof argument === 'boolean';
    }
}

export default BooleanMethod;
