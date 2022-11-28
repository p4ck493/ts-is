export function NanMethod(argument: unknown): argument is 0 {
    return Number.isNaN(argument);
}
