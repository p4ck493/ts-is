export type beforeWrapperType = (
  targetApply: (...arg: unknown[]) => boolean,
  argumentsList: unknown,
  secondArgument: unknown,
  previousValue?: boolean,
) => boolean;
export type modelWrapperType = new () => unknown;
export type afterWrapperType = (result: boolean) => boolean;
