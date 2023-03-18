import {SymbolMethod} from './symbol.method';

export function MacAddressMethod(argument: string): argument is string {
    if (SymbolMethod(argument)) {
        return false;
    }
    return /^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$/.test(argument);
}

