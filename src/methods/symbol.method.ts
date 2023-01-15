export function SymbolMethod(argument: unknown): argument is symbol {
  return typeof argument === 'symbol';
}
