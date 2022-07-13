import {RegisterInIs} from '../../decorators';


/**
 *
 * @method Falsy
 * @example
 * Is.Falsy()
 * Is.Not.Falsy()
 * Is.All.Falsy()
 * Is.All.Not.Falsy()
 */
@RegisterInIs({
    className: 'falsy',
    customMethod: 'method'
})
class FalsyMethod {
    /**
     *
     * @param argument
     */
    public static method(argument: unknown): argument is false {
        const context: FalsyMethod = this; // TODO ContextMethodInterface
        // console.log(context);
        return !argument;
    }
}

export default FalsyMethod;
