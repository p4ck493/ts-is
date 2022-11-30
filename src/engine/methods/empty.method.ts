import {StringMethod} from './string.method';
import {ObjectMethod} from './object.method';
import {ArrayMethod} from './array.method';
import {InstanceofMethod} from './instanceof.method';

export function EmptyMethod(argument: unknown): boolean {
    if (StringMethod(argument) || ObjectMethod(argument) || ArrayMethod(argument)) {
        if (InstanceofMethod(argument, Map)) {
            return argument.size === 0;
        }
        return Object.keys(argument as object)?.length === 0;
    }
    return false;
}
