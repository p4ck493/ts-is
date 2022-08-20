export function proxyGeneratorApply() {
    return (target, thisArg, argumentList) => {
        return target(...argumentList);
    };
}
