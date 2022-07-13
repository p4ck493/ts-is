import {RegisterInIs} from '../../decorators';


/**
 *
 * @method False
 * @example
 * Is.False()
 * Is.Not.False()
 * Is.All.False()
 * Is.All.Not.False()
 */
@RegisterInIs({
    className: 'false',
    customMethod: 'method'
})
class FalseMethod {
    /**
     *
     * @param argument
     */
    public static method(argument: unknown): argument is false {
        const context: FalseMethod = this; // TODO ContextMethodInterface
        console.log(context);
        return argument === false;
    }
}

export default FalseMethod;
