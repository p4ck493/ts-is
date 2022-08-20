import BaseCaseEngine from './base.case.engine';

class OrCaseEngine extends BaseCaseEngine {
    static runCase() {
        const context = this;
        return context.lists.methods.some((methodObject) => {
            return BaseCaseEngine.runCommand(methodObject, context.argumentList);
        });
    }
}
export default OrCaseEngine;
