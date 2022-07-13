"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper_and_case_engine_1 = __importDefault(require("./wrapper-and.case.engine"));
function wrapperOrCaseEngine() {
    const context = this;
    return wrapper_and_case_engine_1.default.call(context);
}
exports.default = wrapperOrCaseEngine;
