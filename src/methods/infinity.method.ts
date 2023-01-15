const INFINITY: number = 1/0;
export function InfinityMethod(argument: unknown): argument is number {
  return argument === INFINITY || argument === -INFINITY;
}
