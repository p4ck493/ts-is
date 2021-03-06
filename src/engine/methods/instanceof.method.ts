/**
 *
 * @method Instanceof
 * @param argument object
 * @param classRef link to model
 */
function InstanceofMethod<T>(argument: unknown, classRef: new () => T): argument is T {
    return argument instanceof classRef;
}

export default InstanceofMethod;
