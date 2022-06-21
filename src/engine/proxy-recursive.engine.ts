import {afterWrapperType, beforeWrapperType} from '../types/wrapper.type';
import {afterWrappers, beforeWrappers, modelWrappers} from '../wrappers';
import {FlagsToolInterface} from '../interfaces/tools/flags.tool.interface';
import {CaseToolConst} from '../consts/tools/case.tool.const';
import {CaseToolEnum} from '../enums/tools/case.tool.enum';
import {InstanceofMethod} from '../methods/instanceof.method';
import {Methods} from '../methods';
import {findKey} from '../tools/find-key.tool';


// GET

type proxyRecursiveGetType = (targetGet: any, nameGet: string) => ReturnType<typeof proxyRecursive>;

function proxyRecursiveGet(
  flags: FlagsToolInterface,
  beforeWrapperList: beforeWrapperType[],
  afterWrapperList: afterWrapperType[],
): proxyRecursiveGetType {
  return (targetGet, nameGet: string) => {
    return proxyRecursive(targetGet[nameGet], nameGet, flags, beforeWrapperList, afterWrapperList);
  };
}

// APPLY

type proxyRecursiveApplyType = (
  targetApply: any,
  thisArg: unknown,
  argumentList: unknown[],
) => ReturnType<typeof targetApply>;

/**
 * Case #1 Model
 * Is.Person(...)
 *
 * Case #2 Method
 * Is.Boolean(...)
 *
 * Case #3 After Wrapper & Method
 * Is.Not.Boolean(...)
 *
 * Case #4 Before Wrapper & Method
 * Is.All.Boolean(...)
 *
 * Case #5 Before & After Wrapper & Method
 * Is.All.Not.Boolean(...)
 *
 * Case #6 Before Wrapper & Model
 * Is.All.Person(...)
 *
 * Case #7 After Wrapper & Model
 * Is.Not.Person(...)
 *
 */
function proxyRecursiveApply(
  flags: FlagsToolInterface,
  beforeWrapperList: beforeWrapperType[],
  afterWrapperList: afterWrapperType[],
): proxyRecursiveApplyType {
  return (targetApply, thisArg, argumentList) => {
    let result;

    const key: CaseToolEnum = CaseToolEnum[findKey(CaseToolConst, flags) as keyof typeof CaseToolEnum];

    switch (key) {
      case CaseToolEnum.Method:
        result = targetApply(...argumentList);

        break;
      case CaseToolEnum.AfterWrapperAndMethod:
        result = targetApply(...argumentList);
        result = afterWrapperList.reduce((previousValue: any, currentValue: any) => {
          return currentValue(previousValue);
        }, result);

        break;
      case CaseToolEnum.BeforeWrapperAndMethod:
        result = beforeWrapperList.reduce((previousValue: any, currentValue: any) => {
          return currentValue(targetApply, argumentList, previousValue);
        }, result);

        break;
      case CaseToolEnum.Model:
        result = InstanceofMethod(argumentList[0], targetApply);

        break;
      case CaseToolEnum.BeforeWrapperAndModel:
        // Before
        result = beforeWrapperList.reduce((previousValue: any, currentValue: any) => {
          return currentValue(InstanceofMethod, argumentList, targetApply, previousValue);
        }, result);

        break;
      case CaseToolEnum.AfterWrapperAndModel:
        result = InstanceofMethod(argumentList[0], targetApply);

        // After
        result = afterWrapperList.reduce((previousValue: any, currentValue: any) => {
          return currentValue(previousValue);
        }, result);

        break;
      case CaseToolEnum.BeforeAndAfterWrapperAndMethod:
        // Before
        result = beforeWrapperList.reduce((previousValue: any, currentValue: any) => {
          return currentValue(targetApply, argumentList, previousValue);
        }, result);

        // After
        result = afterWrapperList.reduce((previousValue: any, currentValue: any) => {
          return currentValue(previousValue);
        }, result);

        break;
      case CaseToolEnum.BeforeAndAfterWrapperAndModel:
        // Before
        result = beforeWrapperList.reduce((previousValue: any, currentValue: any) => {
          return currentValue(InstanceofMethod, argumentList, targetApply, previousValue);
        }, result);

        // After
        result = afterWrapperList.reduce((previousValue: any, currentValue: any) => {
          return currentValue(previousValue);
        }, result);

        break;

      default:
        throw new Error(`No case found for this command. More information: https://github.com/p4ck493/ts-is`);

    }

    return result;
  };
}

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
 * @param target must by an object
 * @param name must be a string
 * @param flags TODO text
 * @param beforeWrapperList must be array of before wrappers
 * @param afterWrapperList must be array of after wrappers
 */
export function proxyRecursive(
  target: object,
  name: string,
  flags: FlagsToolInterface,
  beforeWrapperList: beforeWrapperType[],
  afterWrapperList: afterWrapperType[],
): object {
  let newTarget: object = Methods;

  if (Methods.hasOwnProperty(name)) {
    flags.Method = true;
    newTarget = Methods[name as keyof typeof Methods] ?? target;
  }

  if (modelWrappers.hasOwnProperty(name)) {
    flags.ModelWrapper = true;
    newTarget = modelWrappers[name as keyof typeof modelWrappers];
  }

  if (beforeWrappers.hasOwnProperty(name)) {
    flags.BeforeWrapper = true;
    beforeWrapperList.push(beforeWrappers[name as keyof typeof beforeWrappers]);
  }

  if (afterWrappers.hasOwnProperty(name)) {
    flags.AfterWrapper = true;
    afterWrapperList.push(afterWrappers[name as keyof typeof afterWrappers]);
  }

  checkFlags(flags, name);

  return new Proxy(newTarget, {
    get: proxyRecursiveGet(flags, beforeWrapperList, afterWrapperList),
    apply: proxyRecursiveApply(flags, beforeWrapperList, afterWrapperList),
  });
}
