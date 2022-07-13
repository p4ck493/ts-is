import ContextCaseInterface from '../../interfaces/context-case.interface';
import {methods} from '../methods';

function andCaseEngine(): boolean {
    const context: ContextCaseInterface = this;
    return context.lists.methods.every((methodObject) => {
        const result: any = methodObject.method.apply({}, context.argumentList);
        if (methods.boolean(result)) {
            return result;
        } else {
            return methods.instanceof.call({}, context.argumentList[0], result.classRef)
        }

    });
}

export default andCaseEngine;
