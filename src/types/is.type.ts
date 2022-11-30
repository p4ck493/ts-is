import {AfterWrappersInterface, ConnectionWrappersInterface,} from '../interfaces/wrappers.interface';
import {MethodsInterface} from '../engine/methods';

export type IsType = ((argument: unknown) => void) &
  MethodsInterface &
  ConnectionWrappersInterface &
  AfterWrappersInterface & {
    [key: string]: ((argument: unknown) => unknown) & MethodsInterface & ConnectionWrappersInterface;
  };
