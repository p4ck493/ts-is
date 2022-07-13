import {RegisterInIs} from '../../decorators';


/**
 *
 * @method String
 * @example
 * Is.String()
 * Is.Not.String()
 * Is.All.String()
 * Is.All.Not.String()
 */
@RegisterInIs({
    className: 'string',
    customMethod: 'method'
})
class StringMethod {
    /**
     *
     * @param argument
     */
    public static method(argument: unknown): argument is string {
        const context: StringMethod = this; // TODO ContextMethodInterface
        console.log(context);
        return typeof argument === 'string';
    }
}

export default StringMethod
