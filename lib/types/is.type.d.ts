import {MethodsInterface} from '../interfaces/methods.interface';
import {AfterWrappersInterface, BeforeWrappersInterface} from '../interfaces/wrappers.interface';

export declare type IsType = ((argument: unknown) => void) & MethodsInterface & BeforeWrappersInterface & AfterWrappersInterface & {
    [key: string]: (argument: unknown) => unknown;
};
