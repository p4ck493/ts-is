declare type proxyGeneratorApplyType = (target: (...arg: unknown[]) => boolean, thisArg: unknown, argumentList: unknown[]) => ReturnType<typeof target>;
export declare function proxyGeneratorApply(): proxyGeneratorApplyType;
export {};
