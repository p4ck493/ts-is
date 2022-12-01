import {FunctionMethod} from './function.method';

export function ArrayMethod<T>(argument: unknown, classRef?: new () => T): argument is Array<T> {
    if (argument instanceof Array) {
        if (FunctionMethod(classRef)) {
            if (argument.length) {
                return argument.every((item: T) => item instanceof (classRef as any));
            } else {
                return false;
            }
        }
        return true;
    }
    return false;
}
