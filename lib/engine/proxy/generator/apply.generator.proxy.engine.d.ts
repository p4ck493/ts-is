declare type proxyGeneratorApplyType = (target: (...arg: unknown[]) => boolean, thisArg: unknown, argumentList: unknown[]) => ReturnType<typeof target>;
/**
 * This work only for command: is()
 */
export declare function proxyGeneratorApply(): proxyGeneratorApplyType;
export {};
