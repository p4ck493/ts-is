import wrappers from '../../../wrappers/index';
import {methods} from '../../methods/index';
import proxyRecursiveApply from './apply.recursive.proxy.engine';
import proxyRecursiveGet from './get.recursive.proxy.engine';

/**
 *
 * @param index for to know which method use in wrapper
 * @param target object for next proxy
 * @param name of current part of command is.object.not.empty() ['is', 'object', 'not', 'empty']
 * @param lists of all
 */
export function proxyRecursive(index, target, name, lists) {
    let newTarget = methods; // TODo interface
    let notFound = true;
    if (Reflect.has(methods, name)) {
        notFound = false;
        newTarget = methods[name];
        lists.methods.push({
            name,
            index,
            method: newTarget,
        });
    }
    if (wrappers.hasOwnProperty(name)) {
        notFound = false;
        lists[name].push({
            name,
            index,
            method: wrappers[name],
        });
    }
    if (notFound) {
        throw new Error(`Not found propery with name: ${name}`);
    }
    return new Proxy(newTarget, {
        get: proxyRecursiveGet(index + 1, lists),
        apply: proxyRecursiveApply(lists),
    });
}
