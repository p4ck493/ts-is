import ContextCaseInterface from '../../interfaces/context-case.interface';
import wrapperAndCaseEngine from './wrapper-and.case.engine';

function wrapperOrCaseEngine(): boolean {
    const context: ContextCaseInterface = this;

    return wrapperAndCaseEngine.call(context);
}

export default wrapperOrCaseEngine;
