"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const instanceof_method_1 = __importDefault(require("../methods/instanceof.method"));
const boolean_method_1 = __importDefault(require("../methods/boolean.method"));
function andCaseEngine() {
    const context = this;
    return context.lists.methods.every((methodObject) => {
        const result = methodObject.method.call({}, ...context.argumentList);
        if (boolean_method_1.default.method(result)) {
            return result;
        }
        else {
            return instanceof_method_1.default.method.call({}, context.argumentList, result.classRef);
        }
    });
}
exports.default = andCaseEngine;
