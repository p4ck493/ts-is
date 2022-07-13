import {RegisterInIs} from '../../decorators';

/**
 *
 * @method Null
 * @example
 * Is.Null()
 * Is.Not.Null()
 * Is.All.Null()
 * Is.All.Not.Null()
 */
@RegisterInIs({
    className: 'null',
    customMethod: 'method'
})
class NullMethod {
    /**
     *
     * @param argument
     */
    public static method(argument: unknown): argument is null {
        const context: NullMethod = this; // TODO ContextMethodInterface
        console.log(context);
        return argument === null;
    }
}

export default NullMethod;
