import {methods} from './index';

export function ArrayMethod<T>(argument: unknown, classRef?: new () => T): argument is Array<T> {
    if (argument instanceof Array) {
        if (methods.function(classRef)) {
            if (argument.length) {
                return argument.every((item: T) => item instanceof classRef);
            } else {
                return false;
            }
        }
        return true;
    }
    return false;
}
