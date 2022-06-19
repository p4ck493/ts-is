import {beforeWrapperType} from '../../types/wrapper.type';
import {executeType} from '../../types/execute.type';
import {ArrayMethod} from '../../methods/array.method';

/**
 *
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
        return execute(...argument);
      }
      return targetApply.call(this, argument, secondArgument);
    });
  };

  return execute(...(argumentsList as []));
};
