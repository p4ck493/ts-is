import { SymbolMethod } from './symbol.method';
import { isConfig } from '../config';

export function MacAddressMethod(argument: string): argument is string {
  if (SymbolMethod(argument)) {
    return false;
  }
  return isConfig.regex.macAddress.test(argument);
}
