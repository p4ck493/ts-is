type proxyGeneratorApplyType = (
  target: (...arg: unknown[]) => boolean,
  thisArg: unknown,
  argumentList: unknown[],
) => ReturnType<typeof target>;

/**
 * This work only for command: is()
 */
export function proxyGeneratorApply(): proxyGeneratorApplyType {
  return (target, thisArg, argumentList) => {
    return target(...argumentList);
  };
}
