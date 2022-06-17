import {MethodsInterface} from '../interfaces/methods.interface';

export declare type beforeWrapperType = (targetApply: any, argumentsList: any) => boolean;
export declare type afterWrapperType = (result: boolean) => boolean;
export declare type mixinWrapperAndMethodsTypes = beforeWrapperType & afterWrapperType & MethodsInterface;
