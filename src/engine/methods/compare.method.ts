import {ContextMethodInterface} from '../../interfaces/context-method.interface';
import {methods} from './index';


export enum TypeOfValueEnum {
    object = 'object',
}

/**
 *
 * @method Compare
 * @param objectOne is generic type
 * @param objectTwo is generic type
 */
function CompareMethod<T>(objectOne: T, objectTwo: T): boolean {
    const context: ContextMethodInterface = this; // TODO ContextMethodInterface
    if (
        methods.null(objectOne) ||
        methods.undefined(objectOne) ||
        methods.null(objectTwo) ||
        methods.undefined(objectTwo)
    ) {
        return false;
    }

    const keysOfObjectOne: string[] = Object.keys(objectOne) ?? [];
    const keysOfObjectTwo: string[] = Object.keys(objectTwo) ?? [];

    if (!methods.array(keysOfObjectOne) || !methods.array(keysOfObjectTwo)) {
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
                if (!CompareMethod((objectOne as any)[keyOfObjectOne], (objectTwo as any)[keyOfObjectOne])) {
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

export default CompareMethod;
