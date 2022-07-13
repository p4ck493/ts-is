import ContextCaseInterface from '../../interfaces/context-case.interface';
import InstanceofMethod from '../methods/instanceof.method';
import BooleanMethod from '../methods/boolean.method';

function andCaseEngine(): boolean {
    const context: ContextCaseInterface = this;
    return context.lists.methods.every((methodObject) => {
        const result: any = methodObject.method.call({}, ...context.argumentList);
        if (BooleanMethod.method(result)) {
            return result;
        } else {
            return InstanceofMethod.method.call({}, context.argumentList, result.classRef)
        }

    });
}

export default andCaseEngine;
