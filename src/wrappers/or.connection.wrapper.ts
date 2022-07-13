import Methods from '../engine/methods';

/**
 *
 * @method Or
 */
function OrWrapper(
    argument: unknown,
    targetApplyList: ((...arg: unknown[]) => boolean)[],
    secondArgumentList?: unknown[],
): boolean {
    return targetApplyList.reduce((previousValue: any, currentValue: any, currentIndex: number) => {
        if (Methods.true.method(previousValue)) {
            return previousValue;
        }
        return currentValue.call(this, argument, secondArgumentList?.[currentIndex]);
    }, null);
}

export default OrWrapper;
