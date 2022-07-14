"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_case_engine_1 = __importDefault(require("./base.case.engine"));
class OrCaseEngine extends base_case_engine_1.default {
    static runCase() {
        const context = this;
        return context.lists.methods.some((methodObject) => {
            return base_case_engine_1.default.runCommand(methodObject, context.argumentList);
        });
    }
}
exports.default = OrCaseEngine;
