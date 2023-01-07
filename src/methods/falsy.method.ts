export function FalsyMethod(argument: unknown): argument is false {
  return !argument;
}
