import {ProxyMethodsInterface} from '../interfaces/methods.interface';
import {
    AfterWrappersInterface,
    BeforeWrappersInterface,
    ConnectionWrappersInterface
} from '../interfaces/wrappers.interface';

export declare type IsType = ((argument: unknown) => void) & ProxyMethodsInterface & BeforeWrappersInterface & ConnectionWrappersInterface & AfterWrappersInterface & {
    [key: string]: ((argument: unknown) => unknown) & ProxyMethodsInterface & ConnectionWrappersInterface;
};
