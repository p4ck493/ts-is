import {SymbolMethod} from './symbol.method';

export function Ipv4Method(argument: string): argument is string {
    if (SymbolMethod(argument)) {
        return false;
    }
    return /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(argument);
}

