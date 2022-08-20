import {proxyRecursive} from './index';

function proxyRecursiveGet(index, lists) {
    return (targetGet, nameGet) => {
        return proxyRecursive(index, targetGet[nameGet], nameGet, lists);
    };
}
export default proxyRecursiveGet;
