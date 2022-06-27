import { beforeWrapperType } from '../../types/wrapper.type';
import { executeType } from '../../types/execute.type';
import { ArrayMethod } from '../../methods/array.method';
import { EmptyArrayMethod } from '../../methods/empty-array.method';

/**
 *
 * @method All
 * @param targetApply must be method
 * @param argumentsList must be
 * @param secondArgument TODO text
 * @param previousValue TODO text
 */
export const AllWrapper: beforeWrapperType = (
  targetApply: (...arg: unknown[]) => boolean,
  argumentsList: unknown,
  secondArgument?: unknown,
  previousValue?: boolean,
): boolean => {
  const execute: executeType = (...args: unknown[]): boolean => {
    return args.every((argument: unknown): boolean => {
      if (ArrayMethod(argument) && argument.length) {
        if (targetApply instanceof EmptyArrayMethod) {
          if (argument.some((item) => ArrayMethod(item))) {
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
};
