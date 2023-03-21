import {NumberMethod} from './number.method';
import {BigIntMethod} from './bigInt.method';
import {isConfig} from '../config';
import {EmptyMethod} from './empty.method';
import {SymbolMethod} from './symbol.method';

export function NumericMethod(argument: any): boolean {
    if (SymbolMethod(argument)) {
        return false;
    }
    argument = '' + argument;
    if (EmptyMethod(argument)) {
        return false;
    }
    return NumberMethod(+argument) || (isConfig.regex.bigint.test(argument) && BigIntMethod(BigInt((argument).slice(0, -1))));
}
