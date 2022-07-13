import TruthyMethod from '../engine/methods/truthy.method';

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
        if (TruthyMethod.method(previousValue)) {
            return previousValue;
        }
        return currentValue.call(this, argument, secondArgumentList?.[currentIndex]);
    }, null);
}

export default OrWrapper;
