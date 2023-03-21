import {NumberMethod} from './number.method';

export function IntMethod(target: unknown): target is number {
    return NumberMethod(target) && Math.floor(target) === target;
}
