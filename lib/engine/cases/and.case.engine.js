"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../methods");
function andCaseEngine() {
    const context = this;
    return context.lists.methods.every((methodObject) => {
        const result = methodObject.method.apply({}, context.argumentList);
        if (methods_1.methods.boolean(result)) {
            return result;
        }
        else {
            return methods_1.methods.instanceof.call({}, context.argumentList[0], result.classRef);
        }
    });
}
exports.default = andCaseEngine;
