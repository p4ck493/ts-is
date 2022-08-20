import { ListsProxyEngineInterface } from './engine/proxy/lists.proxy.engine.interface';

export default interface ContextCaseInterface {
  targetApply: unknown; // TODO interface
  argumentList: unknown[] & unknown[][];
  lists: ListsProxyEngineInterface;
}
