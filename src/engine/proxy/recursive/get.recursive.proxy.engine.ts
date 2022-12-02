import { proxyRecursive } from './index';
import { ParamsProxyEngineInterface } from '../../../interfaces/engine/proxy/params.proxy.engine.interface';

type proxyRecursiveGetType = (targetGet: any, nameGet: string) => ReturnType<typeof proxyRecursive>;

export function proxyRecursiveGet(params: ParamsProxyEngineInterface): proxyRecursiveGetType {
  return (targetGet, nameGet) => {
    return proxyRecursive(targetGet[nameGet], nameGet, params);
  };
}
