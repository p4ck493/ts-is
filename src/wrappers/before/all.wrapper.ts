import {beforeWrapperType} from '../../types/wrapper.type';
import {executeType} from '../../types/execute.type';

/**
 *
 * @param targetApply must be method
 * @param argumentsList must be
 */
export const AllWrapper: beforeWrapperType = (targetApply: (arg: unknown) => boolean, argumentsList: unknown[]) => {
  const execute: executeType = (...args: any[]): boolean => {
    return args.every((argument: any): boolean => {
      if (Array.isArray(argument) && argument?.length) {
        return execute(...argument);
      }
      return targetApply(argument);
    });
  };

  return execute(...argumentsList);
};
