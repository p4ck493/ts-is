import {RegisterInIs} from '../../decorators';


/**
 *
 * @method Instanceof
 * @param argument object
 * @param classRef link to model
 */
@RegisterInIs({
    className: 'instanceof',
    customMethod: 'method'
})
class InstanceofMethod {
    /**
     *
     * @param argument
     * @param classRef TODO array of classRef
     */
    public static method<T>(argument: unknown, classRef: new () => T): argument is T {
        const context: InstanceofMethod = this; // TODO ContextMethodInterface
        console.log(context);
        return argument instanceof classRef;
    }
}

export default InstanceofMethod;
