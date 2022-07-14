"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../methods");
class BaseCaseEngine {
    static runCommand(methodObject, argument) {
        const result = methodObject.method.apply({}, argument);
        if (methods_1.methods.boolean(result)) {
            return result;
        }
        else {
            return methods_1.methods.instanceof.call({}, argument[0], result.classRef);
        }
    }
    /**
     * Only for interface, because TypeScript cannot find static method :/
     * (recordOfCases[key] as BaseCaseEngine).runCase.call(context
     */
    runCase() {
        return false;
    }
}
exports.default = BaseCaseEngine;
