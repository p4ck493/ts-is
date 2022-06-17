import {MethodsInterface} from '../interfaces/methods.interface';

export type wrapperType = (targetApply: any, argumentsList: any) => any;
export type mixinWrapperAndMethodsTypes = wrapperType & MethodsInterface;
