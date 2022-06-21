/**
 *
 * @param argument is boolean type
 */
export function FalsyMethod(argument: unknown): argument is false {
    return !argument;
}
