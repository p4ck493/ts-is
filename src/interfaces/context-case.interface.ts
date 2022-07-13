import {ListsProxyEngineInterface} from './engine/proxy/lists.proxy.engine.interface';

export default interface ContextCaseInterface {
    result: boolean;
    targetApply: unknown; // TODO interface
    argumentList: unknown[];
    lists: ListsProxyEngineInterface;
}
