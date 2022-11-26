import { methods } from './index';

export function TruthyMethod(argument: unknown): argument is true {
  return !methods.falsy(argument);
}
