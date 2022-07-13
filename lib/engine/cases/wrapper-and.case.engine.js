"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../methods");
function wrapperAndCaseEngine() {
    const context = this;
    // TODO more than one NOT
    const notWrapper = context.lists.not[0];
    const allWrapper = context.lists.all[0];
    const execute = (methodObject) => {
        // TODO check if allWrapper is exist and then work recursive for arguments
        const result = methodObject.method.apply({}, context.argumentList);
        if (methods_1.methods.boolean(result)) {
            return result;
        }
        else {
            return methods_1.methods.instanceof.call({}, context.argumentList[0], result.classRef);
        }
    };
    let result = true;
    let methodObject;
    for (let index = 0; index < context.lists.methods.length; index++) {
        methodObject = context.lists.methods[index];
        console.log('methodObject&notWrapper', methodObject, notWrapper);
        if (notWrapper && methodObject.index > notWrapper.index) {
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
