import {afterWrapperType, beforeWrapperType} from '../types/wrapper.type';
import {ProxyMethodsInterface} from './methods.interface';

export interface BeforeWrappersInterface {
    all: beforeWrapperType & ProxyMethodsInterface & AfterWrappersInterface & {
        [key: string]: ((argument: unknown) => unknown) & ConnectionWrappersInterface & ProxyMethodsInterface;
    };
}
export interface ConnectionWrappersInterface {
    or: ProxyMethodsInterface & {
        [key: string]: ((argument: unknown) => unknown) & ConnectionWrappersInterface;
    };
}
export interface AfterWrappersInterface {
    not: afterWrapperType & ProxyMethodsInterface & {
        [key: string]: ((argument: unknown) => unknown) & ConnectionWrappersInterface & ProxyMethodsInterface;
    };
}
