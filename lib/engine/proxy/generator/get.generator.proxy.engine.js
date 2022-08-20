import {proxyRecursive} from '../recursive/index';

export function proxyGeneratorGet() {
    return (target, name) => {
        return proxyRecursive(0, target, name, {
            all: [],
            not: [],
            or: [],
            methods: [],
        });
    };
}
