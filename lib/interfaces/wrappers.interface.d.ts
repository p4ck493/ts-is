import {afterWrapperType, beforeWrapperType} from '../types/wrapper.type';
import {MethodsInterface} from './methods.interface';

export interface BeforeWrappersInterface {
    All: beforeWrapperType & MethodsInterface & AfterWrappersInterface & {
        [key: string]: (argument: unknown) => unknown;
    };
}
export interface AfterWrappersInterface {
    Not: afterWrapperType & MethodsInterface & {
        [key: string]: (argument: unknown) => unknown;
    };
}
