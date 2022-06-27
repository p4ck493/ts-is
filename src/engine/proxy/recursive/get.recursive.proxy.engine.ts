import { FlagsToolInterface } from '../../../interfaces/tools/flags.tool.interface';
import { proxyRecursive } from './index';
import { ListsProxyEngineInterface } from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

type proxyRecursiveGetType = (targetGet: any, nameGet: string) => ReturnType<typeof proxyRecursive>;

export function proxyRecursiveGet(flags: FlagsToolInterface, lists: ListsProxyEngineInterface): proxyRecursiveGetType {
  return (targetGet, nameGet: string) => {
    return proxyRecursive(targetGet[nameGet], nameGet, flags, lists);
  };
}
