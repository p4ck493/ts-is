import { methods } from './index';

export function SyntaxErrorMethod(argument: unknown): argument is SyntaxError {
  return methods.instanceof(argument, SyntaxError);
}
