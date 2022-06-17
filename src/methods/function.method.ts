/**
 * @param argument is any type
 */
export function FunctionMethod(argument: any): argument is '[object Function]' {
  return {}.toString.call(argument) === '[object Function]';
}
