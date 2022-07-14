import wrappers from '../../../wrappers';
import {methods} from '../../methods';
import proxyRecursiveApply from './apply.recursive.proxy.engine';
import proxyRecursiveGet from './get.recursive.proxy.engine';
import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

/**
 *
 * @param index for to know which method use in wrapper
 * @param target object for next proxy
 * @param name of current part of command is.object.not.empty() ['is', 'object', 'not', 'empty']
 * @param lists of all
 */
export function proxyRecursive(
    index: number,
    target: object,
    name: string,
    lists: ListsProxyEngineInterface,
): object {
    let newTarget: any = methods; // TODo interface
    let notFound: boolean = true;

    if (Reflect.has(methods, name)) {
        notFound = false;
        newTarget = methods[name as keyof typeof methods];
        lists.methods.push({
            name,
            index,
            method: newTarget
        });
    }

    if (wrappers.hasOwnProperty(name)) {
        notFound = false;
        lists[(name as 'not' | 'all' | 'or')].push({
            name,
            index,
            method: wrappers[name as keyof typeof wrappers]
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
