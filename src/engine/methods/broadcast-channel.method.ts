import { methods } from './index';

export function BroadcastChannelMethod(argument: unknown): argument is BroadcastChannel {
  return methods.instanceof(argument, BroadcastChannel);
}
