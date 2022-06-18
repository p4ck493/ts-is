import {MethodsInterface} from '../interfaces/methods.interface';
import {AfterWrappersInterface, BeforeWrappersInterface} from '../interfaces/wrappers.interface';
import {beforeWrapperType} from './wrapper.type';

export type IsType =
    (() => void) &
    MethodsInterface &
    BeforeWrappersInterface &
    AfterWrappersInterface &
    { [key: string]: beforeWrapperType & MethodsInterface };
