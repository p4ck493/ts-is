import {ContextMethodInterface} from '../../interfaces/context-method.interface';


/**
 *
 * @method Instanceof
 * @param argument object
 * @param classRef link to model
 */
function InstanceofMethod<T>(argument: unknown, classRef: new () => T): argument is T {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    // console.log(context);
    return argument instanceof classRef;
}

export default InstanceofMethod;
