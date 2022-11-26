import { methods } from './index';

export function URIErrorMethod(argument: unknown): argument is URIError {
  return methods.instanceof(argument, URIError);
}
