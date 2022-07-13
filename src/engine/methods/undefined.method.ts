import {RegisterInIs} from '../../decorators';


/**
 *
 * @method Undefined
 * @example
 * Is.Undefined()
 * Is.Not.Undefined()
 * Is.All.Undefined()
 * Is.All.Not.Undefined()
 */
@RegisterInIs({
    className: 'undefined',
    customMethod: 'method'
})
class UndefinedMethod {
    /**
     *
     * @param argument
     */
    public static method(argument: unknown): argument is undefined {
        const context: UndefinedMethod = this; // TODO ContextMethodInterface
        // console.log(context);
        return argument === undefined;
    }
}

export default UndefinedMethod;
