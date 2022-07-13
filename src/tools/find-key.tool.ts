import CompareMethod from '../engine/methods/compare.method';

// TODO guard on arguments
// TODO create another report for the method
export function findKey<T>(object: { [key: string]: T }, value: T): string | null {
    for (const key of Object.keys(object)) {
        if (CompareMethod.method<T>(object[key], value)) {
            return key;
        }
    }
    return null;
}
