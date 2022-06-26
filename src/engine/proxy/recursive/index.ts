import {
  afterWrapperType,
  beforeWrapperType,
  connectionWrapperType,
  modelWrapperType
} from '../../../types/wrapper.type';
import {afterWrappers, beforeWrappers, connectionWrappers, modelWrappers} from '../../../wrappers';
import {FlagsToolInterface} from '../../../interfaces/tools/flags.tool.interface';
import {Methods} from '../../../methods';
import {proxyRecursiveApply} from './apply.recursive.proxy.engine';
import {proxyRecursiveGet} from './get.recursive.proxy.engine';
import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

function checkFlags(flags: FlagsToolInterface, name: string): void {
  const notFoundAnyMethods: boolean[] = Object.values(flags).map((property) => property);

  if (notFoundAnyMethods.every((item: boolean) => !item)) {
    throw new Error(`Not found propery with name: ${name}`);
  }
}

/**
 *
 * Wrappers
 * After: Is.Not.Boolean(0)
 * Before: Is.All.Boolean([true, false])
 * Mixin: Is.All.Not.Boolean([true, false, [0]])
 *
 *
 * @param {object} target
 * @param {string} name
 * @param {FlagsToolInterface} flags
 * @param {ListsProxyEngineInterface} lists
 */
export function proxyRecursive(
    target: object,
    name: string,
    flags: FlagsToolInterface,
    lists: ListsProxyEngineInterface
): object {
  let newTarget: object = Methods;

  if (Methods.hasOwnProperty(name)) {
    flags.Method = true;
    newTarget = Methods[name as keyof typeof Methods] ?? target;
    const methods: any = Methods[name as keyof typeof Methods]; // TODO interface
    if (!lists.methods.includes(methods)) {
      lists.methods.push(methods);
    }
  }

  if (modelWrappers.hasOwnProperty(name)) {
    flags.ModelWrapper = true;
    newTarget = modelWrappers[name as keyof typeof modelWrappers];
    const models: modelWrapperType = modelWrappers[name as keyof typeof modelWrappers];
    if (!lists.models.includes(models)) {
      lists.models.push(models);
    }
  }

  if (beforeWrappers.hasOwnProperty(name)) {
    flags.BeforeWrapper = true;
    const beforeWrapper: beforeWrapperType = beforeWrappers[name as keyof typeof beforeWrappers];
    if (!lists.beforeWrapper.includes(beforeWrapper)) {
      lists.beforeWrapper.push(beforeWrapper);
    }
  }

  if (afterWrappers.hasOwnProperty(name)) {
    flags.AfterWrapper = true;
    const afterWrapper: afterWrapperType = afterWrappers[name as keyof typeof afterWrappers];
    if (!lists.afterWrapper.includes(afterWrapper)) {
      lists.afterWrapper.push(afterWrapper);
    }
  }

  if (connectionWrappers.hasOwnProperty(name)) {
    flags.ConnectionWrapper = true;
    const connectionWrapper: connectionWrapperType = connectionWrappers[name as keyof typeof connectionWrappers];
    if (!lists.connectionWrapper.includes(connectionWrapper)) {
      lists.connectionWrapper.push(connectionWrapper);
    }
  }

  checkFlags(flags, name);

  return new Proxy(newTarget, {
    get: proxyRecursiveGet(flags, lists),
    apply: proxyRecursiveApply(flags, lists),
  });
}
