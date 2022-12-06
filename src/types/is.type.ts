import { AfterWrappersInterface, ConnectionWrappersInterface } from '../interfaces/wrappers.interface';
import { AllMethodsInterface } from '../engine/methods';

export type IsType = AllMethodsInterface &
  ConnectionWrappersInterface &
  AfterWrappersInterface & {
    [key: string]: ((argument: unknown) => unknown) & IsType;
  };
