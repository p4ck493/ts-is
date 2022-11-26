import { methods } from './index';

export function DataViewMethod(argument: unknown): argument is DataView {
  return methods.instanceof(argument, DataView);
}
