import {MethodsInterface} from '../interfaces/methods.interface';
import {
    AfterWrappersInterface,
    BeforeWrappersInterface,
    ConnectionWrappersInterface
} from '../interfaces/wrappers.interface';
import {Methods} from '../methods';

export type IsType = ((argument: unknown) => void) &
    typeof Methods &
    BeforeWrappersInterface &
    ConnectionWrappersInterface &
    AfterWrappersInterface & { [key: string]: ((argument: unknown) => unknown) & MethodsInterface & ConnectionWrappersInterface };
