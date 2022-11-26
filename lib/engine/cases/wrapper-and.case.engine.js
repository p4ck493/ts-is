"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapperAndCaseEngine = void 0;
const methods_1 = require("../methods");
const base_case_engine_1 = require("./base.case.engine");
class WrapperAndCaseEngine extends base_case_engine_1.BaseCaseEngine {
    static runCase() {
        const context = this;
        const notWrapper = context.lists.not[0];
        const allWrapper = context.lists.all[0];
        const middleware = (methodObject) => {
            if (allWrapper) {
                const recursive = (...args) => {
                    return args.every((argument) => {
                        if (methods_1.methods.array(argument) && argument.length) {
                            if (methodObject.method instanceof methods_1.methods.empty) {
                                if (argument.some((item) => methods_1.methods.array(item))) {
                                    return recursive(...argument);
                                }
                            }
                            else {
                                return recursive(...argument);
                            }
                        }
                        return base_case_engine_1.BaseCaseEngine.runCommand(methodObject, [argument]);
                    });
                };
                return recursive(...context.argumentList);
            }
            else {
                return base_case_engine_1.BaseCaseEngine.runCommand(methodObject, context.argumentList);
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
exports.WrapperAndCaseEngine = WrapperAndCaseEngine;
