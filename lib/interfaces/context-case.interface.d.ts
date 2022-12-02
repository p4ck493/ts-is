import {ParamsProxyEngineInterface} from './engine/proxy/params.proxy.engine.interface';

export default interface ContextCaseInterface {
    targetApply: unknown;
    argumentList: unknown[] & unknown[][];
    lists: ParamsProxyEngineInterface;
}
