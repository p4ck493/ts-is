import {MethodsInterface} from '../interfaces/methods.interface';

export type beforeWrapperType = (targetApply: any, argumentsList: any) => boolean;
export type afterWrapperType = (result: boolean) => boolean;
export type mixinWrapperAndMethodsTypes = beforeWrapperType & afterWrapperType & MethodsInterface;
