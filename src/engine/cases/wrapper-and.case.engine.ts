import ContextCaseInterface from '../../interfaces/context-case.interface';
import { ListsProxyEngineInterface } from '../../interfaces/engine/proxy/lists.proxy.engine.interface';
import { methods } from '../methods';
import { BaseCaseEngine } from './base.case.engine';

export class WrapperAndCaseEngine extends BaseCaseEngine {
  public static override runCase(): boolean {
    const context: ContextCaseInterface = this as unknown as ContextCaseInterface;

    const notWrapper: ListsProxyEngineInterface['not'][0] = context.lists.not[0];
    const allWrapper: ListsProxyEngineInterface['all'][0] = context.lists.all[0];

    const middleware = (methodObject: ListsProxyEngineInterface['methods'][0]): boolean => {
      if (allWrapper) {
        const recursive = (...args: unknown[]): boolean => {
          return args.every((argument: unknown): boolean => {
            if (methods.array(argument) && argument.length) {
              if (methodObject.method instanceof methods.empty) {
                if (argument.some((item) => methods.array(item))) {
                  return recursive(...argument);
                }
              } else {
                return recursive(...argument);
              }
            }
            return BaseCaseEngine.runCommand(methodObject, [argument]);
          });
        };

        return recursive(...(context.argumentList as []));
      } else {
        return BaseCaseEngine.runCommand(methodObject, context.argumentList);
      }
    };

    let result = true;

    for (const methodObject of context.lists.methods) {
      if (notWrapper && methodObject.index > notWrapper.index) {
        result = !middleware(methodObject);
      } else {
        result = middleware(methodObject);
      }

      if (!result) {
        break;
      }
    }

    return result;
  }
}
