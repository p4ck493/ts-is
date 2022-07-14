"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../methods");
const base_case_engine_1 = __importDefault(require("./base.case.engine"));
class WrapperOrCaseEngine extends base_case_engine_1.default {
    static runCase() {
        const context = this;
        const notWrapper = context.lists.not[0];
        const allWrapper = context.lists.all[0];
        const orWrapper = context.lists.or[0];
        const middleware = (methodObject) => {
            return base_case_engine_1.default.runCommand(methodObject, context.argumentList);
        };
        let result = true;
        if (allWrapper) {
            // is.all.not.person.or.man()
            // is.all.person.or.man()
            const methodListForCheck = context.lists.methods.filter((method) => {
                var _a;
                return method.index > ((_a = notWrapper === null || notWrapper === void 0 ? void 0 : notWrapper.index) !== null && _a !== void 0 ? _a : (orWrapper.index - 2));
            });
            const recursive = (argumentList) => {
                const listForNextInteraction = [];
                const listForNow = [];
                let localResult = false;
                argumentList === null || argumentList === void 0 ? void 0 : argumentList.forEach((argument) => {
                    if (methods_1.methods.array(argument) && (argument === null || argument === void 0 ? void 0 : argument.length)) {
                        if (argument.some((arg) => methods_1.methods.array(arg))) {
                            argument.forEach((arg) => {
                                if (methods_1.methods.array(arg) && arg.length) {
                                    listForNextInteraction.push(arg);
                                }
                                else {
                                    listForNow.push([arg]);
                                }
                            });
                        }
                        else {
                            listForNow.push(...argument.map((arg) => {
                                return [arg];
                            }));
                        }
                    }
                    else {
                        listForNow.push(argument);
                    }
                });
                if (listForNow.length) {
                    const runCommand = (argument) => {
                        return methodListForCheck.some((method) => {
                            return base_case_engine_1.default.runCommand(method, argument);
                        });
                    };
                    localResult = listForNow.every((argument) => runCommand(argument));
                    if (notWrapper) {
                        localResult = !localResult;
                    }
                }
                if (!localResult) {
                    if (listForNextInteraction.length) {
                        localResult = recursive(listForNextInteraction);
                    }
                }
                return localResult;
            };
            result = recursive(context.argumentList);
            // if (notWrapper) {
            //     result = !result;
            // }
        }
        else {
            // is.not.Person.or.Man
            let methodObject;
            for (let index = 0; index < context.lists.methods.length; index++) {
                methodObject = context.lists.methods[index];
                if (methodObject.index > notWrapper.index) {
                    // is.not.person.or.string()
                    result = !middleware(methodObject);
                    if (!result) {
                        break;
                    }
                }
            }
        }
        return result;
    }
}
exports.default = WrapperOrCaseEngine;
