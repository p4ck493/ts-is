import {MethodsInterface} from '../interfaces/methods.interface';
import {AfterWrappersInterface, BeforeWrappersInterface} from '../interfaces/wrappers.interface';

export declare type IsType = (() => void) & MethodsInterface & BeforeWrappersInterface & AfterWrappersInterface & {
    [key: string]: (argument: unknown) => unknown;
};
