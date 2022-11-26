/**
 *
 * @method instanceof
 * @param argument object
 * @param classRef link to model
 */
export function InstanceofMethod<T>(argument: unknown, classRef: new (...args: any) => T): argument is T {
  return argument instanceof classRef;
}
