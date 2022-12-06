const toString: typeof Object.prototype.toString = Object.prototype.toString;

export function FunctionMethod<T extends typeof Function>(argument: unknown): argument is T {
    try {
        return toString.call(argument) === '[object Function]' || AsyncFunctionMethod(argument) || GeneratorFunctionMethod(argument);
    } catch (e) {
        if (e instanceof TypeError) {
            if (e.message === 'Cannot create proxy with a non-object as target or handler') {
                return true;
            }
        }
        return false;
    }
}

export function AsyncFunctionMethod(argument: unknown): argument is '[object AsyncFunction]' {
    try {
        return toString.call(argument) === '[object AsyncFunction]';
    } catch (e) {
        return false;
    }
}

export function GeneratorFunctionMethod(argument: unknown): argument is '[object Generator]' {
    try {
        return toString.call(argument) === '[object Generator]';
    } catch (e) {
        return false;
    }
}
