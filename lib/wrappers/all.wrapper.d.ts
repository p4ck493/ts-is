/**
 *
 * @method All
 * @param targetApply must be method
 * @param argumentsList must be
 * @param secondArgument TODO text
 * @param previousValue TODO text
 */
declare function AllWrapper(targetApply: (...arg: unknown[]) => boolean, argumentsList: unknown, secondArgument?: unknown, previousValue?: boolean): boolean;
export default AllWrapper;
