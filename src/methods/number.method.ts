import { InfinityMethod } from './infinity.method';

export function NumberMethod(argument: unknown): argument is number {
  return typeof argument === 'number' && !isNaN(argument) && !InfinityMethod(argument);
}
