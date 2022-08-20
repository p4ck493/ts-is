import BaseCaseEngine from './base.case.engine';

class AndCaseEngine extends BaseCaseEngine {
    static runCase() {
        const context = this;
        return context.lists.methods.every((methodObject) => {
            return BaseCaseEngine.runCommand(methodObject, context.argumentList);
        });
    }
}
export default AndCaseEngine;
