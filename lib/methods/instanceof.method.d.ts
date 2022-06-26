/**
 *
 * @method Instanceof
 * @param argument object
 * @param classRef link to model
 */
export declare function InstanceofMethod<T>(argument: unknown, classRef: new () => T): argument is T;
