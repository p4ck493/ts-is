import {proxyRecursive} from '../recursive/index';

declare type proxyGeneratorGetType = (target: object, name: string) => ReturnType<typeof proxyRecursive>;
export declare function proxyGeneratorGet(): proxyGeneratorGetType;
export {};
