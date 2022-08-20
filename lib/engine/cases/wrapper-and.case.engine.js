import {methods} from '../methods/index';
import BaseCaseEngine from './base.case.engine';

class WrapperAndCaseEngine extends BaseCaseEngine {
    static runCase() {
        const context = this;
        // TODO more than one NOT
        const notWrapper = context.lists.not[0];
        const allWrapper = context.lists.all[0];
        const middleware = (methodObject) => {
            if (allWrapper) {
                const recursive = (...args) => {
                    return args.every((argument) => {
                        if (methods.array(argument) && argument.length) {
                            if (methodObject.method instanceof methods.empty) {
                                if (argument.some((item) => methods.array(item))) {
                                    return recursive(...argument);
                                }
                            }
                            else {
                                return recursive(...argument);
                            }
                        }
                        return BaseCaseEngine.runCommand(methodObject, [argument]);
                    });
                };
                return recursive(...context.argumentList);
            }
            else {
                return BaseCaseEngine.runCommand(methodObject, context.argumentList);
            }
        };
        let result = true;
        for (const methodObject of context.lists.methods) {
            if (notWrapper && methodObject.index > notWrapper.index) {
                result = !middleware(methodObject);
            }
            else {
                result = middleware(methodObject);
            }
            if (!result) {
                break;
            }
        }
        return result;
    }
}
export default WrapperAndCaseEngine;
