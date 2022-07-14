import ContextCaseInterface from '../../interfaces/context-case.interface';
import BaseCaseEngine from './base.case.engine';

class OrCaseEngine extends BaseCaseEngine {
  public static override runCase(): boolean {
    const context: ContextCaseInterface = this as unknown as ContextCaseInterface;
    return context.lists.methods.some((methodObject) => {
      return BaseCaseEngine.runCommand(methodObject, context.argumentList);
    });
  }
}

export default OrCaseEngine;
