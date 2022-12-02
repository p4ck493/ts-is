import {proxyRecursive} from './index';
import {ParamsProxyEngineInterface} from '../../../interfaces/engine/proxy/params.proxy.engine.interface';

declare type proxyRecursiveGetType = (targetGet: any, nameGet: string) => ReturnType<typeof proxyRecursive>;
export declare function proxyRecursiveGet(params: ParamsProxyEngineInterface): proxyRecursiveGetType;
export {};
