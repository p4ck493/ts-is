import ContextCaseInterface from '../../interfaces/context-case.interface';
import BooleanMethod from '../methods/boolean.method';
import InstanceofMethod from '../methods/instanceof.method';
import {ListsProxyEngineInterface} from '../../interfaces/engine/proxy/lists.proxy.engine.interface';

function wrapperAndCaseEngine(): boolean {
    const context: ContextCaseInterface = this;

    // TODO more than one NOT

    const notWrapper: ListsProxyEngineInterface['not'][0] = context.lists.not[0];
    const allWrapper: ListsProxyEngineInterface['all'][0] = context.lists.all[0];

    const execute = (methodObject: ListsProxyEngineInterface['methods'][0]): boolean => {
        // TODO check if allWrapper is exist and then work recursive for arguments
        const result: any = methodObject.method.call({}, ...context.argumentList);
        if (BooleanMethod.method(result)) {
            return result;
        } else {
            return InstanceofMethod.method.call({}, context.argumentList, result.classRef)
        }
    };

    let result: boolean = true;

    let methodObject: ListsProxyEngineInterface['methods'][0];

    for (let index: number = 0; index < context.lists.methods.length; index++) {

        methodObject = context.lists.methods[index];

        console.log('methodObject&notWrapper', methodObject, notWrapper);

        if (methodObject.index > notWrapper.index) {

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
