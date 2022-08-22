import {methods} from '../methods';
import {ListsProxyEngineInterface} from '../../interfaces/engine/proxy/lists.proxy.engine.interface';

interface BaseCaseEngineInterface {
  runCase: () => boolean;
}

abstract class BaseCaseEngine implements BaseCaseEngineInterface {
  public static runCase: () => boolean;

  public static runCommand(methodObject: ListsProxyEngineInterface['methods'][0], argument: unknown[]): boolean {
    const result: any = methodObject.method.apply({}, argument);
    if (methods.boolean(result)) {
      return result;
    } else {
      return methods.instanceof.call<any, any, boolean>({}, argument[0], result.classRef);
    }
  }

  /**
   * Only for interface, because TypeScript cannot find static method :/
   * (recordOfCases[key] as BaseCaseEngine).runCase.call(context
   */
  public runCase(): boolean {
    return false;
  }
}

export default BaseCaseEngine;
