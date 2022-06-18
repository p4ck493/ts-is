/**
 * @param argument is any type
 */
export declare function FunctionMethod<T extends () => void>(argument: unknown): argument is T;
