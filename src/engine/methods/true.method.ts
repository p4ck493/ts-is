import {RegisterInIs} from '../../decorators';


/**
 *
 * @method True
 * @example
 * Is.True()
 * Is.Not.True()
 * Is.All.True()
 * Is.All.Not.True()
 */
@RegisterInIs({
    className: 'true',
    customMethod: 'method'
})
class TrueMethod {
    /**
     *
     * @param argument
     */
    public static method(argument: unknown): argument is true {
        const context: TrueMethod = this; // TODO ContextMethodInterface
        console.log(context);
        return argument === true;
    }
}

export default TrueMethod;
