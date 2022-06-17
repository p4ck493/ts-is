import { MethodsInterface } from '../interfaces/methods.interface';
export declare type wrapperType = (targetApply: any, argumentsList: any) => any;
export declare type mixinWrapperAndMethodsTypes = wrapperType & MethodsInterface;
