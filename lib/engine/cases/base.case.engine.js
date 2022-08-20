import {methods} from '../methods/index';

class BaseCaseEngine {
    static runCommand(methodObject, argument) {
        const result = methodObject.method.apply({}, argument);
        if (methods.boolean(result)) {
            return result;
        }
        else {
            return methods.instanceof.call({}, argument[0], result.classRef);
        }
    }
    /**
     * Only for interface, because TypeScript cannot find static method :/
     * (recordOfCases[key] as BaseCaseEngine).runCase.call(context
     */
    runCase() {
        return false;
    }
}
export default BaseCaseEngine;
