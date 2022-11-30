import {afterWrapperType} from '../types/wrapper.type';
import {MethodsInterface} from '../engine/methods';


export interface ConnectionWrappersInterface {
  or: MethodsInterface & { [key: string]: ((argument: unknown) => unknown) & ConnectionWrappersInterface };
}

export interface AfterWrappersInterface {
  not: afterWrapperType &
    MethodsInterface & {
      [key: string]: ((argument: unknown) => unknown) & ConnectionWrappersInterface & MethodsInterface;
    };
}
