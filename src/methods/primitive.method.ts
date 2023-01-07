export function PrimitiveMethod(argument: unknown): boolean {
  if (argument === null) {
    return true;
  }

  if (typeof argument === 'object' || typeof argument === 'function') {
    return false;
  } else {
    return true;
  }
}
