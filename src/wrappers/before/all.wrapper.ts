import {beforeWrapperType} from '../../types/wrapper.type';
import {executeType} from '../../types/execute.type';
import {Is} from '../../index';

/**
 *
 * @param targetApply must be method
 * @param argumentsList must be
 * @param previousValue
 */
export const AllWrapper: beforeWrapperType = (
    targetApply: (arg: unknown) => boolean,
    argumentsList: unknown,
    previousValue?: boolean
): boolean => {
  const execute: executeType = (...args: unknown[]): boolean => {
    return args.every((argument: unknown): boolean => {
      if (Is.Array(argument) && argument.length) {
        return execute(...argument);
      }
      return targetApply(argument);
    });
  };

  return execute(...(argumentsList as []));
};
