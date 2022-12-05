export function FunctionMethod<T = () => void>(argument: unknown): argument is T {
  return {}.toString.call(argument) === '[object Function]';
}
