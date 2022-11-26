/**
 *
 * @method instanceof
 * @param argument object
 * @param classRef link to model
 */
export declare function InstanceofMethod<T>(argument: unknown, classRef: new (...args: any) => T): argument is T;
