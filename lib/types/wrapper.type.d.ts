export declare type beforeWrapperType = (targetApply: (...arg: unknown[]) => boolean, argumentsList: unknown, secondArgument: unknown, previousValue?: boolean) => boolean;
export declare type afterWrapperType = (result: boolean) => boolean;
