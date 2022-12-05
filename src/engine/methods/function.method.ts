export function FunctionMethod<T = () => void>(argument: unknown): argument is T {
  return ['[object GeneratorFunction]', '[object Function]', '[object AsyncFunction]', '[object Proxy]'].includes(
    Object.prototype.toString.call(argument),
  );
}
