export function BooleanMethod(argument: unknown): argument is boolean {
  return typeof argument === 'boolean';
}
