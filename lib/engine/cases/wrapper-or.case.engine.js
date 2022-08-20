import {methods} from '../methods/index';
import BaseCaseEngine from './base.case.engine';

class WrapperOrCaseEngine extends BaseCaseEngine {
    static runCase() {
        const context = this;
        const notWrapper = context.lists.not[0];
        const allWrapper = context.lists.all[0];
        const orWrapper = context.lists.or[0];
        const middleware = (methodObject) => {
            return BaseCaseEngine.runCommand(methodObject, context.argumentList);
        };
        let result = true;
        if (allWrapper) {
            // is.all.not.person.or.man()
            // is.all.person.or.man()
            const methodListForCheck = context.lists.methods.filter((method) => {
                return method.index > (notWrapper?.index ?? orWrapper.index - 2);
            });
            const recursive = (argumentList) => {
                const listForNextInteraction = [];
                const listForNow = [];
                let localResult = false;
                argumentList?.forEach((argument) => {
                    if (methods.array(argument) && argument?.length) {
                        if (argument.some((arg) => methods.array(arg))) {
                            argument.forEach((arg) => {
                                if (methods.array(arg) && arg.length) {
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
                            return BaseCaseEngine.runCommand(method, argument);
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
            for (const methodObject of context.lists.methods) {
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
export default WrapperOrCaseEngine;
