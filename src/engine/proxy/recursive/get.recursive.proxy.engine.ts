import {proxyRecursive} from './index';
import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

type proxyRecursiveGetType = (targetGet: any, nameGet: string) => ReturnType<typeof proxyRecursive>;

function proxyRecursiveGet(index: number, lists: ListsProxyEngineInterface): proxyRecursiveGetType {
  return (targetGet, nameGet: string) => {
    return proxyRecursive(index, targetGet[nameGet], nameGet, lists);
  };
}

export default proxyRecursiveGet;
