import {ListsProxyEngineInterface} from './engine/proxy/lists.proxy.engine.interface';

export default interface ContextCaseInterface {
    targetApply: unknown;
    argumentList: unknown[];
    lists: ListsProxyEngineInterface;
}
