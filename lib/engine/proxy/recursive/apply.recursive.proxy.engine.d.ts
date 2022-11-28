import {ParamsProxyEngineInterface} from '../../../interfaces/engine/proxy/params.proxy.engine.interface';

declare type proxyRecursiveApplyType = (targetApply: any, thisArg: unknown, argumentList: unknown[] & unknown[][]) => ReturnType<typeof targetApply>;
export declare function proxyRecursiveApply(params: ParamsProxyEngineInterface): proxyRecursiveApplyType;
export {};
