import {ParamsProxyEngineInterface} from '../../../interfaces/engine/proxy/params.proxy.engine.interface';

declare type proxyRecursiveApplyType = (notUsedTargetApply: any, thisArg: unknown, argumentList: unknown[] & unknown[][]) => ReturnType<typeof notUsedTargetApply>;
export declare function proxyRecursiveApply(params: ParamsProxyEngineInterface): proxyRecursiveApplyType;
export {};
