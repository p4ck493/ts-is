import {MethodsInterface} from '../interfaces/methods.interface';
import {
    AfterWrappersInterface,
    BeforeWrappersInterface,
    ConnectionWrappersInterface
} from '../interfaces/wrappers.interface';

export type IsType = ((argument: unknown) => void) &
    MethodsInterface &
    BeforeWrappersInterface &
    ConnectionWrappersInterface &
    AfterWrappersInterface & { [key: string]: ((argument: unknown) => unknown) & MethodsInterface & ConnectionWrappersInterface };
