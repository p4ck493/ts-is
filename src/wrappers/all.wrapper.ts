import {executeType} from '../types/execute.type';
import ArrayMethod from '../engine/methods/array.method';
import EmptyMethod from '../engine/methods/empty.method';

/**
 *
 * @method All
 * @param targetApply must be method
 * @param argumentsList must be
 * @param secondArgument TODO text
 * @param previousValue TODO text
 */

function AllWrapper(
    targetApply: (...arg: unknown[]) => boolean,
    argumentsList: unknown,
    secondArgument?: unknown,
    previousValue?: boolean,
): boolean {
    const execute: executeType = (...args: unknown[]): boolean => {
        return args.every((argument: unknown): boolean => {
            if (ArrayMethod.method(argument) && argument.length) {
                if (targetApply instanceof EmptyMethod.method) {
                    if (argument.some((item) => ArrayMethod.method(item))) {
                        return execute(...argument);
                    }
                } else {
                    return execute(...argument);
                }
            }
            return targetApply.call(this, argument, secondArgument, previousValue);
        });
    };

    return execute(...(argumentsList as []));
}

export default AllWrapper;
