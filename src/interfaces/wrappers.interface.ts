import {AllMethodsInterface} from '../engine/methods';

export interface ConnectionWrappersInterface {
    or: AllMethodsInterface & { [key: string]: ((argument: unknown) => unknown) & ConnectionWrappersInterface };
}

export interface AfterWrappersInterface {
    not: AllMethodsInterface & {
        [key: string]: ((argument: unknown) => unknown) & ConnectionWrappersInterface & AllMethodsInterface;
    };
}
