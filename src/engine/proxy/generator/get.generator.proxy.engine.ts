import {proxyRecursive} from '../recursive';
import {SymbolMethod} from '../../methods/symbol.method';

type proxyGeneratorGetType = (target: object, name: string, receiver: unknown) => ReturnType<typeof proxyRecursive>;

export const packageName = '@p4ck493/ts-is';

export function proxyGeneratorGet(): proxyGeneratorGetType {
    return (target, name, receiver) => {
        if (SymbolMethod(name)) {
            return undefined as any;
        }
        if (['valueOf', 'toString'].includes(name)) {
            return (packageName[name as any] as any).bind(packageName);
        }
        return proxyRecursive(target, name, {
            commandList: [],
        });
    };
}
