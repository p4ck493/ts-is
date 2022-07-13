import {RegisterInIs} from '../../decorators';
import NullMethod from './null.method';
import UndefinedMethod from './undefined.method';
import methods from './index';


export enum TypeOfValueEnum {
    object = 'object',
}

@RegisterInIs({
    className: 'compare',
    customMethod: 'method'
})
class CompareMethod {

    /**
     *
     * @method Compare
     * @param objectOne is generic type
     * @param objectTwo is generic type
     */
    public static method<T>(objectOne: T, objectTwo: T): boolean {
        const context: CompareMethod = this; // TODO ContextMethodInterface
        console.log(context);
        if (
            NullMethod.method(objectOne) ||
            UndefinedMethod.method(objectOne) ||
            NullMethod.method(objectTwo) ||
            UndefinedMethod.method(objectTwo)
        ) {
            return false;
        }

        const keysOfObjectOne: string[] = Object.keys(objectOne) ?? [];
        const keysOfObjectTwo: string[] = Object.keys(objectTwo) ?? [];

        if (!methods.array.method(keysOfObjectOne) || !methods.array.method(keysOfObjectTwo)) {
            return false;
        }

        if (keysOfObjectOne.length !== keysOfObjectOne.length) {
            return false;
        }

        if (!keysOfObjectOne.length && !keysOfObjectTwo.length) {
            return true;
        }

        for (const keyOfObjectOne of keysOfObjectTwo) {
            switch (typeof (objectOne as any)[keyOfObjectOne]) {
                case TypeOfValueEnum.object:
                    if (!this.method((objectOne as any)[keyOfObjectOne], (objectTwo as any)[keyOfObjectOne])) {
                        return false;
                    }
                    break;
                default:
                    if ((objectOne as any)[keyOfObjectOne] !== (objectTwo as any)[keyOfObjectOne]) {
                        return false;
                    }
                    break;
            }
        }

        return true;
    }
}

export default CompareMethod;
