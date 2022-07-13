import {proxyRecursive} from './index';
import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

type proxyRecursiveGetType = (targetGet: any, nameGet: string) => ReturnType<typeof proxyRecursive>;

/**
 *
 * @param index
 * @param lists
 */
function proxyRecursiveGet(
    index: number,
    lists: ListsProxyEngineInterface
): proxyRecursiveGetType {
    console.log('proxyRecursiveGet', 'index', index);
    return (targetGet, nameGet: string) => {
        console.log(targetGet, nameGet);
        return proxyRecursive(index, targetGet[nameGet], nameGet, lists);
    };
}

export default proxyRecursiveGet;
