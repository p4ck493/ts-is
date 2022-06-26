/**
 *
 * @method Instanceof
 * @param argument object
 * @param classRef link to model
 */
export function InstanceofMethod<T>(argument: unknown, classRef: new () => T): argument is T {
  return argument instanceof classRef;
}
