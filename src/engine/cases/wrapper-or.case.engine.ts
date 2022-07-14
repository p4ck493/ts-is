import ContextCaseInterface from '../../interfaces/context-case.interface';
import {ListsProxyEngineInterface} from '../../interfaces/engine/proxy/lists.proxy.engine.interface';
import {methods} from '../methods';
import BaseCaseEngine from './base.case.engine';

class WrapperOrCaseEngine extends BaseCaseEngine {
    public static override runCase(): boolean {
        const context: ContextCaseInterface = this as unknown as ContextCaseInterface;

        const notWrapper: ListsProxyEngineInterface['not'][0] = context.lists.not[0];
        const allWrapper: ListsProxyEngineInterface['all'][0] = context.lists.all[0];
        const orWrapper: ListsProxyEngineInterface['or'][0] = context.lists.or[0];

        const middleware = (methodObject: ListsProxyEngineInterface['methods'][0]): boolean => {

            return BaseCaseEngine.runCommand(methodObject, context.argumentList);

        };

        let result = true;

        if (allWrapper) {

            // is.all.not.person.or.man()
            // is.all.person.or.man()

            const methodListForCheck = context.lists.methods.filter((method) => {
                return method.index > (notWrapper?.index ?? (orWrapper.index - 2));
            });

            const recursive = (argumentList: unknown[][]): boolean => {
                const listForNextInteraction: unknown[][] = [];
                const listForNow: unknown[][] = [];
                let localResult = false;
                argumentList?.forEach((argument: unknown[]) => {
                    if (methods.array(argument) && argument?.length) {
                        if (argument.some((arg) => methods.array(arg))) {
                            argument.forEach((arg) => {
                                if (methods.array(arg) && arg.length) {
                                    listForNextInteraction.push(arg);
                                } else {
                                    listForNow.push([arg]);
                                }
                            });
                        } else {
                            listForNow.push(...argument.map((arg) => {
                                return [arg];
                            }));
                        }
                    } else {
                        listForNow.push(argument);
                    }
                });
                if (listForNow.length) {
                    const runCommand = (argument: unknown[]): boolean => {
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


        } else {

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
