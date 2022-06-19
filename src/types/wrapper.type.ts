export type beforeWrapperType = (targetApply: (arg: unknown) => boolean, argumentsList: unknown, previousValue?: boolean) => boolean;
export type typeWrapperType = (targetApply: unknown, argumentsList: unknown) => boolean;
export type afterWrapperType = (result: boolean) => boolean;
