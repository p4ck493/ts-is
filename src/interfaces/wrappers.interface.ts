import {afterWrapperType, beforeWrapperType} from '../types/wrapper.type';
import {MethodsInterface} from './methods.interface';

export interface BeforeWrappersInterface {
    All: beforeWrapperType & MethodsInterface & AfterWrappersInterface;
}

export interface AfterWrappersInterface {
    Not: afterWrapperType & MethodsInterface & { [key: string]: beforeWrapperType & MethodsInterface };
}
