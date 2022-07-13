"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../methods");
function wrapperAndCaseEngine() {
    const context = this;
    // TODO more than one NOT
    const notWrapper = context.lists.not[0];
    const allWrapper = context.lists.all[0];
    const execute = (methodObject, argument) => {
        const result = methodObject.method.apply({}, argument);
        if (methods_1.methods.boolean(result)) {
            return result;
        }
        else {
            return methods_1.methods.instanceof.call({}, argument[0], result.classRef);
        }
    };
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
                    return methodObject.method.call(this, argument);
                });
            };
            return recursive(...context.argumentList);
        }
        else {
            return execute(methodObject, context.argumentList);
        }
    };
    let result = true;
    let methodObject;
    for (let index = 0; index < context.lists.methods.length; index++) {
        methodObject = context.lists.methods[index];
        console.log('methodObject&notWrapper', methodObject, notWrapper);
        if (notWrapper && methodObject.index > notWrapper.index) {
            if (middleware(methodObject)) {
                result = false;
                break;
            }
        }
        else {
            if (!middleware(methodObject)) {
                result = false;
                break;
            }
        }
    }
    return result;
}
exports.default = wrapperAndCaseEngine;
