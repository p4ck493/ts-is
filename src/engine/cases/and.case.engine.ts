import ContextCaseInterface from '../../interfaces/context-case.interface';
import {BaseCaseEngine} from './base.case.engine';

export class AndCaseEngine extends BaseCaseEngine {
    public static override runCase(): boolean {
        const context: ContextCaseInterface = this as unknown as ContextCaseInterface;
        return context.lists.methods.every((methodObject) => {
            return BaseCaseEngine.runCommand(methodObject, context.argumentList);
        });
    }
}
