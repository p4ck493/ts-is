export type beforeWrapperType = (targetApply: any, argumentsList: any) => boolean;
export type typeWrapperType = (targetApply: any, argumentsList: any) => boolean;
export type afterWrapperType = (result: boolean) => boolean;
// export type mixinWrapperAndMethodsTypes = beforeWrapperType & afterWrapperType & MethodsInterface;
