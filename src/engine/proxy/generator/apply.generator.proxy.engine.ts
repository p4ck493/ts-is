type proxyGeneratorApplyType = (
  target: (...arg: unknown[]) => boolean,
  thisArg: unknown,
  argumentList: unknown[],
) => ReturnType<typeof target>;

export function proxyGeneratorApply(): proxyGeneratorApplyType {
  return (target: (...arg: unknown[]) => boolean, thisArg: unknown, argumentList: unknown[]) => {
    return target(...argumentList);
  };
}
