import {methods} from './index';

export var TypeOfValueEnum;
(function (TypeOfValueEnum) {
    TypeOfValueEnum["object"] = "object";
})(TypeOfValueEnum || (TypeOfValueEnum = {}));
/**
 *
 * @method compare
 * @param objectOne is generic type
 * @param objectTwo is generic type
 */
function CompareMethod(objectOne, objectTwo) {
    if (methods.null(objectOne) ||
        methods.undefined(objectOne) ||
        methods.null(objectTwo) ||
        methods.undefined(objectTwo)) {
        return false;
    }
    const keysOfObjectOne = Object.keys(objectOne) ?? [];
    const keysOfObjectTwo = Object.keys(objectTwo) ?? [];
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
        switch (typeof objectOne[keyOfObjectOne]) {
            case TypeOfValueEnum.object:
                if (!CompareMethod(objectOne[keyOfObjectOne], objectTwo[keyOfObjectOne])) {
                    return false;
                }
                break;
            default:
                if (objectOne[keyOfObjectOne] !== objectTwo[keyOfObjectOne]) {
                    return false;
                }
                break;
        }
    }
    return true;
}
export default CompareMethod;
