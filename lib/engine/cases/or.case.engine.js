"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrCaseEngine = void 0;
const base_case_engine_1 = require("./base.case.engine");
class OrCaseEngine extends base_case_engine_1.BaseCaseEngine {
    static runCase() {
        const context = this;
        return context.lists.methods.some((methodObject) => {
            return base_case_engine_1.BaseCaseEngine.runCommand(methodObject, context.argumentList);
        });
    }
}
exports.OrCaseEngine = OrCaseEngine;
