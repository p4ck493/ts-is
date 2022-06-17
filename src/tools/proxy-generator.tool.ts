import {wrapperType} from '../types/wrapper.type';
import {wrappers} from '../wrappers';
import {WrappersInterface} from '../interfaces/wrappers.interface';

export const proxyGenerator: any = (defaultFunction: Function, methodList: any): any => {
    return new Proxy(defaultFunction, {
        get: function (target: any, name: string) {
            const wrapper: wrapperType = (targetApply: any, argumentsList: any) => {
                return targetApply(...argumentsList);
            };
            return proxyRecursive(target, name, methodList, wrapper);
        },
        apply: function (target: Function, thisArg: any, argumentList: any) {
            return target(...argumentList);
        },
    });
};

const proxyRecursive: any = (
    target: any,
    name: string,
    methodList: any,
    wrapper: wrapperType
): any => {
    let newTarget = methodList[name] ?? target;

    if (wrappers.hasOwnProperty(name)) {
        wrapper = wrappers[(name as keyof WrappersInterface)];
        newTarget = methodList;
    } else {
        if (!methodList.hasOwnProperty(name)) {
            throw new Error(`Not found propery with name: ${name}`);
        }
    }

    return new Proxy(newTarget, {
        get: function (targetGet: any, nameGet: string) {
            // console.log(targetGet, nameGet);
            return proxyRecursive(targetGet[nameGet], nameGet, targetGet, wrapper);
        },
        apply: function (targetApply: Function, thisArg: any, argumentList: any) {
            return wrapper(targetApply, argumentList);
        },
    });
};
