import wrappers from '../../../wrappers';
import Methods from '../../methods';
import proxyRecursiveApply from './apply.recursive.proxy.engine';
import proxyRecursiveGet from './get.recursive.proxy.engine';
import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

/**
 *
 * @param index
 * @param target
 * @param name
 * @param lists
 */
export function proxyRecursive(
    index: number,
    target: object,
    name: string,
    lists: ListsProxyEngineInterface,
): object {
    let newTarget: object = Methods;
    let notFound: boolean = true;

    if (Methods.hasOwnProperty(name)) {
        notFound = false;
        newTarget = Methods[name as keyof typeof Methods];
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
        get: proxyRecursiveGet(index++, lists),
        apply: proxyRecursiveApply(lists),
    });
}
