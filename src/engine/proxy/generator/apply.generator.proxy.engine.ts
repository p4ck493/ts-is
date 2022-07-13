type proxyGeneratorApplyType = (
    target: (...arg: unknown[]) => boolean,
    thisArg: unknown,
    argumentList: unknown[],
) => ReturnType<typeof target>;

export function proxyGeneratorApply(): proxyGeneratorApplyType {
    console.log('proxyGeneratorApply');
    return (target: (...arg: unknown[]) => boolean, thisArg: unknown, argumentList: unknown[]) => {
        console.log(target, thisArg, argumentList);
        return target(...argumentList);
    };
}
