import ContextCaseInterface from '../../interfaces/context-case.interface';
import {ListsProxyEngineInterface} from '../../interfaces/engine/proxy/lists.proxy.engine.interface';
import {methods} from '../methods';

function wrapperOrCaseEngine(): boolean {
    const context: ContextCaseInterface = this;

    const notWrapper: ListsProxyEngineInterface['not'][0] = context.lists.not[0];
    const allWrapper: ListsProxyEngineInterface['all'][0] = context.lists.all[0];

    const execute = (methodObject: ListsProxyEngineInterface['methods'][0], argument: unknown[]): boolean => {
        const result: any = methodObject.method.apply({}, argument);
        if (methods.boolean(result)) {
            return result;
        } else {
            return methods.instanceof.call({}, argument[0], result.classRef)
        }
    }

    const middleware = (methodObject: ListsProxyEngineInterface['methods'][0]): boolean => {

        if (allWrapper) {

            const recursive = (...args: unknown[]): boolean => {
                // TODO problem with every, if we will check: is.all.not.null.or.undefined, that we check all is null and is undefined, why?
                return args.every((argument: unknown): boolean => {
                    if (methods.array(argument) && argument.length) {
                        if (methodObject.method instanceof methods.empty) {
                            if (argument.some((item) => methods.array(item))) {
                                return recursive(...argument);
                            }
                        } else {
                            return recursive(...argument);
                        }
                    }
                    return execute(methodObject, [argument]);
                });
            };

            return recursive(...(context.argumentList as []));

        } else {
            return execute(methodObject, context.argumentList);
        }

    };

    let result: boolean = true;

    let methodObject: ListsProxyEngineInterface['methods'][0];

    for (let index: number = 0; index < context.lists.methods.length; index++) {

        methodObject = context.lists.methods[index];

        if (notWrapper && methodObject.index > notWrapper.index) {

            // is.not.person.or.string()
            // is.all.not.person.or.man()

            result = !middleware(methodObject);
            if (!result) {
                break;
            }

        } else {

            // is.all.person.or.man()

            result = middleware(methodObject);

            if (result) {
                break;
            }

        }

    }

    return result;
}

export default wrapperOrCaseEngine;
