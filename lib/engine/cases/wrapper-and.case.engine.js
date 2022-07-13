"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boolean_method_1 = __importDefault(require("../methods/boolean.method"));
const instanceof_method_1 = __importDefault(require("../methods/instanceof.method"));
function wrapperAndCaseEngine() {
    const context = this;
    // TODO more than one NOT
    const notWrapper = context.lists.not[0];
    const allWrapper = context.lists.all[0];
    const execute = (methodObject) => {
        // TODO check if allWrapper is exist and then work recursive for arguments
        const result = methodObject.method.call({}, ...context.argumentList);
        if (boolean_method_1.default.method(result)) {
            return result;
        }
        else {
            return instanceof_method_1.default.method.call({}, context.argumentList, result.classRef);
        }
    };
    let result = true;
    let methodObject;
    for (let index = 0; index < context.lists.methods.length; index++) {
        methodObject = context.lists.methods[index];
        console.log('methodObject&notWrapper', methodObject, notWrapper);
        if (methodObject.index > notWrapper.index) {
            if (execute(methodObject)) {
                result = false;
                break;
            }
        }
        else {
            if (!execute(methodObject)) {
                result = false;
                break;
            }
        }
    }
    return result;
}
exports.default = wrapperAndCaseEngine;
