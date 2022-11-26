import {ListsProxyEngineInterface} from '../../interfaces/engine/proxy/lists.proxy.engine.interface';

interface BaseCaseEngineInterface {
    runCase: () => boolean;
}
export declare abstract class BaseCaseEngine implements BaseCaseEngineInterface {
    static runCase: () => boolean;
    static runCommand(methodObject: ListsProxyEngineInterface['methods'][0], argument: unknown[]): boolean;
    /**
     * Only for interface, because TypeScript cannot find static method :/
     * (recordOfCases[key] as BaseCaseEngine).runCase.call(context
     */
    runCase(): boolean;
}
export {};
