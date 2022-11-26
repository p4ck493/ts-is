export function FunctionMethod<T extends () => void>(argument: unknown): argument is T {
  return {}.toString.call(argument) === '[object Function]';
}
