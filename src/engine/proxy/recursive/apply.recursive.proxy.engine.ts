import {FlagsToolInterface} from '../../../interfaces/tools/flags.tool.interface';
import {CaseToolEnum} from '../../../enums/tools/case.tool.enum';
import {findKey} from '../../../tools/find-key.tool';
import {CaseToolConst} from '../../../consts/tools/case.tool.const';
import {InstanceofMethod} from '../../../methods/instanceof.method';
import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

type proxyRecursiveApplyType = (
  targetApply: any,
  thisArg: unknown,
  argumentList: unknown[],
) => ReturnType<typeof targetApply>;

/**
 *
 * Is.String.Or.Number('string') // Returns true
 *
 *
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
 * Case #8 Connection Wrapper & Method
 * Is.Null.Or.Undefined.Or.Empty(...)
 *
 * Case #9 Before & Connection Wrapper & Method
 * Is.All.String.Or.Number(...)
 *
 * Case #10 Connection & After Wrapper & Method
 * Is.Not.Null.Or.Undefined(...)
 *
 * Case #11 Before & Connection & After Wrapper & Method
 * Is.All.Not.PersonModel.Or.AddressModel(...)
 *
 */
export function proxyRecursiveApply(
  flags: FlagsToolInterface,
  lists: ListsProxyEngineInterface,
): proxyRecursiveApplyType {
  return (targetApply, thisArg, argumentList) => {
    let result;

    const key: CaseToolEnum =
      CaseToolEnum[findKey<FlagsToolInterface>(CaseToolConst, flags) as keyof typeof CaseToolEnum];

    switch (key) {
      case CaseToolEnum.Method:
        result = targetApply(...argumentList);

        break;
      case CaseToolEnum.AfterWrapperAndMethod:
        result = targetApply(...argumentList);
        result = lists.afterWrapper.reduce((previousValue: any, currentValue: any) => {
          return currentValue(previousValue);
        }, result);

        break;
      case CaseToolEnum.BeforeWrapperAndMethod:
        result = lists.beforeWrapper.reduce((previousValue: any, currentValue: any) => {
          return currentValue(targetApply, argumentList, previousValue);
        }, result);

        break;
      case CaseToolEnum.Model:
        result = InstanceofMethod(argumentList[0], targetApply);

        break;
      case CaseToolEnum.BeforeWrapperAndModel:
        // Before
        result = lists.beforeWrapper.reduce((previousValue: any, currentValue: any) => {
          return currentValue(InstanceofMethod, argumentList, targetApply, previousValue);
        }, result);

        break;
      case CaseToolEnum.AfterWrapperAndModel:
        result = InstanceofMethod(argumentList[0], targetApply);

        // After
        result = lists.afterWrapper.reduce((previousValue: any, currentValue: any) => {
          return currentValue(previousValue);
        }, result);

        break;
      case CaseToolEnum.BeforeAndAfterWrapperAndMethod:
        // Before
        result = lists.beforeWrapper.reduce((previousValue: any, currentValue: any) => {
          return currentValue(targetApply, argumentList);
        }, result);

        // After
        result = lists.afterWrapper.reduce((previousValue: any, currentValue: any) => {
          return currentValue(previousValue);
        }, result);

        break;
      case CaseToolEnum.BeforeAndAfterWrapperAndModel:
        // Before
        result = lists.beforeWrapper.reduce((previousValue: any, currentValue: any) => {
          return currentValue(InstanceofMethod, argumentList, targetApply, previousValue);
        }, result);

        // After
        result = lists.afterWrapper.reduce((previousValue: any, currentValue: any) => {
          return currentValue(previousValue);
        }, result);

        break;
      case CaseToolEnum.ConnectionWrapperAndMethod:
        // Connection
        result = lists.connectionWrapper.reduce((previousValue: any, currentValue: any) => {
          // TODO use previousValue if will add new connection between method or models
          return currentValue(...argumentList, lists.methods);
        }, result);
        break;
      case CaseToolEnum.ConnectionAndAfterWrapperAndMethod:
        // Connection
        result = lists.connectionWrapper.reduce((previousValue: any, currentValue: any) => {
          // TODO use previousValue if will add new connection between method or models
          return currentValue(...argumentList, lists.methods);
        }, result);

        // After
        result = lists.afterWrapper.reduce((previousValue: any, currentValue: any) => {
          return currentValue(previousValue);
        }, result);

        break;
      case CaseToolEnum.BeforeAndConnectionAndAfterWrapperAndMethod:
        // Before
        result = lists.beforeWrapper.reduce((previousValue: any, currentValue: any) => {
          // TODO lists.connectionWrapper make reduce
          return currentValue(lists.connectionWrapper[0], argumentList, lists.methods);
        }, result);

        // After
        result = lists.afterWrapper.reduce((previousValue: any, currentValue: any) => {
          return currentValue(previousValue);
        }, result);

        break;
      case CaseToolEnum.BeforeAndConnectionWrapperAndMethod:
        // Before
        result = lists.beforeWrapper.reduce((previousValue: any, currentValue: any) => {
          // TODO lists.connectionWrapper make reduce
          return currentValue(lists.connectionWrapper[0], argumentList, lists.methods);
        }, result);

        break;

      case CaseToolEnum.ConnectionWrapperAndModel:
        // Connection
        result = lists.connectionWrapper.reduce((previousValue: any, currentValue: any) => {
          // TODO use previousValue if will add new connection between method or models
          return currentValue(
            ...argumentList,
            lists.models.map((method) => InstanceofMethod),
            lists.models,
          );
        }, result);
        break;

      case CaseToolEnum.ConnectionAndAfterWrapperAndModel:
        // Connection
        result = lists.connectionWrapper.reduce((previousValue: any, currentValue: any) => {
          // TODO use previousValue if will add new connection between method or models
          return currentValue(
            ...argumentList,
            lists.models.map((method) => InstanceofMethod),
            lists.models,
          );
        }, result);

        // After
        result = lists.afterWrapper.reduce((previousValue: any, currentValue: any) => {
          return currentValue(previousValue);
        }, result);

        break;

      case CaseToolEnum.BeforeAndConnectionAndAfterWrapperAndModel:
        // Before
        result = lists.beforeWrapper.reduce((previousValue: any, currentValue: any) => {
          // TODO lists.connectionWrapper make reduce
          return currentValue(
            lists.connectionWrapper[0],
            argumentList,
            lists.models.map((method) => InstanceofMethod),
            lists.models,
          );
        }, result);

        // After
        result = lists.afterWrapper.reduce((previousValue: any, currentValue: any) => {
          return currentValue(previousValue);
        }, result);

        break;

      case CaseToolEnum.BeforeAndConnectionWrapperAndModel:
        // Before
        result = lists.beforeWrapper.reduce((previousValue: any, currentValue: any) => {
          // TODO lists.connectionWrapper make reduce
          return currentValue(
            lists.connectionWrapper[0],
            argumentList,
            lists.models.map((method) => InstanceofMethod),
            lists.models,
          );
        }, result);

        break;

      default:
        throw new Error(`No case found for this command. More information: https://github.com/p4ck493/ts-is`);
    }

    return result;
  };
}
