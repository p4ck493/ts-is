/**
 *
 * @method object
 * @example
 * is.object()
 * is.not.object()
 * is.all.object()
 * is.all.not.object()
 *
 * // Or with generic
 * is.object<PersonModel>()
 * is.not.object<PersonModel>()
 * is.all.object<PersonModel>()
 * is.all.not.object<PersonModel>()
 */
declare function ObjectMethod<T extends object>(argument: unknown): argument is T;
export default ObjectMethod;
