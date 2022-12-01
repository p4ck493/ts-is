import {AfterWrappersInterface, ConnectionWrappersInterface} from '../interfaces/wrappers.interface';
import {AllMethodsInterface} from '../engine/methods';

export declare type IsType = ((argument: unknown) => void) & AllMethodsInterface & ConnectionWrappersInterface & AfterWrappersInterface & {
    [key: string]: ((argument: unknown) => unknown) & AllMethodsInterface & ConnectionWrappersInterface;
};
