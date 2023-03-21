import { SymbolMethod } from './symbol.method';
import { isConfig } from '../config';

export function Ipv6Method(argument: string): argument is string {
  if (SymbolMethod(argument)) {
    return false;
  }
  return isConfig.regex.ipv6.test(argument);
}
