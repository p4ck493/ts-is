/**
 *
 * @method instanceof
 * @param argument object
 * @param classRef link to model
 */
declare function InstanceofMethod<T>(argument: unknown, classRef: new (...args: any) => T): argument is T;
export default InstanceofMethod;
