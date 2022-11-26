import {
    AfterWrappersInterface,
    BeforeWrappersInterface,
    ConnectionWrappersInterface,
} from '../interfaces/wrappers.interface';
import {MethodsInterface} from '../engine/methods';

export type IsType = ((argument: unknown) => void) &
    MethodsInterface &
    BeforeWrappersInterface &
    ConnectionWrappersInterface &
    AfterWrappersInterface & {
    [key: string]: ((argument: unknown) => unknown) & MethodsInterface & ConnectionWrappersInterface;
};
