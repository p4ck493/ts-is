import {methods} from '../engine/methods/index';
// TODO guard on arguments
// TODO create another report for the method
export function findKey(object, value) {
    for (const key of Object.keys(object)) {
        if (methods.compare(object[key], value)) {
            return key;
        }
    }
    return null;
}
