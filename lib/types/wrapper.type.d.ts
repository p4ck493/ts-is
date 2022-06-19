export declare type beforeWrapperType = (targetApply: (arg: unknown) => boolean, argumentsList: unknown, previousValue?: boolean) => boolean;
export declare type typeWrapperType = (targetApply: unknown, argumentsList: unknown) => boolean;
export declare type afterWrapperType = (result: boolean) => boolean;
