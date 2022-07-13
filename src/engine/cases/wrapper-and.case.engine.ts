import ContextCaseInterface from '../../interfaces/context-case.interface';
import {ListsProxyEngineInterface} from '../../interfaces/engine/proxy/lists.proxy.engine.interface';
import {methods} from '../methods';

function wrapperAndCaseEngine(): boolean {
    const context: ContextCaseInterface = this;

    // TODO more than one NOT

    const notWrapper: ListsProxyEngineInterface['not'][0] = context.lists.not[0];
    const allWrapper: ListsProxyEngineInterface['all'][0] = context.lists.all[0];

    const execute = (methodObject: ListsProxyEngineInterface['methods'][0]): boolean => {
        // TODO check if allWrapper is exist and then work recursive for arguments
        const result: any = methodObject.method.apply({}, context.argumentList);
        if (methods.boolean(result)) {
            return result;
        } else {
            return methods.instanceof.call({}, context.argumentList[0], result.classRef)
        }
    };

    let result: boolean = true;

    let methodObject: ListsProxyEngineInterface['methods'][0];

    for (let index: number = 0; index < context.lists.methods.length; index++) {

        methodObject = context.lists.methods[index];

        console.log('methodObject&notWrapper', methodObject, notWrapper);

        if (notWrapper && methodObject.index > notWrapper.index) {

            if (execute(methodObject)) {
                result = false;
                break;
            }

        } else {

            if (!execute(methodObject)) {
                result = false;
                break;
            }

        }

    }

    return result;
}

export default wrapperAndCaseEngine;
