"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndCaseEngine = void 0;
const base_case_engine_1 = require("./base.case.engine");
class AndCaseEngine extends base_case_engine_1.BaseCaseEngine {
    static runCase() {
        const context = this;
        return context.lists.methods.every((methodObject) => {
            return base_case_engine_1.BaseCaseEngine.runCommand(methodObject, context.argumentList);
        });
    }
}
exports.AndCaseEngine = AndCaseEngine;
