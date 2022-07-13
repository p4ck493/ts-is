import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';

type proxyRecursiveApplyType = (
    targetApply: any,
    thisArg: unknown,
    argumentList: unknown[],
) => ReturnType<typeof targetApply>;

// const recordOfCases: { [key: number]: () => void } = {
//     [CaseEnum.Method]: methodCase,
//     [CaseEnum.AfterWrapperAndMethod]: afterWrapperAndMethodCase,
//     [CaseEnum.BeforeWrapperAndMethod]: beforeWrapperAndMethodCase,
//     [CaseEnum.Model]: modelCase,
//     [CaseEnum.BeforeWrapperAndModel]: beforeWrapperAndModelCase,
//     [CaseEnum.AfterWrapperAndModel]: afterWrapperAndModelCase,
//     [CaseEnum.BeforeAndAfterWrapperAndMethod]: beforeAndAfterWrapperAndMethodCase,
//     [CaseEnum.BeforeAndAfterWrapperAndModel]: beforeAndAfterWrapperAndModelCase,
//     [CaseEnum.ConnectionWrapperAndMethod]: connectionWrapperAndMethodCase,
//     [CaseEnum.ConnectionAndAfterWrapperAndMethod]: connectionAndAfterWrapperAndMethodCase,
//     [CaseEnum.BeforeAndConnectionAndAfterWrapperAndMethod]: beforeAndConnectionAndAfterWrapperAndMethodCase,
//     [CaseEnum.BeforeAndConnectionWrapperAndMethod]: beforeAndConnectionWrapperAndMethodCase,
//     [CaseEnum.ConnectionWrapperAndModel]: connectionWrapperAndModelCase,
//     [CaseEnum.ConnectionAndAfterWrapperAndModel]: connectionAndAfterWrapperAndModelCase,
//     [CaseEnum.BeforeAndConnectionAndAfterWrapperAndModel]: beforeAndConnectionAndAfterWrapperAndModelCase,
//     [CaseEnum.BeforeAndConnectionWrapperAndModel]: beforeAndConnectionWrapperAndModelCase,
// };

// const foundCase = findKey<FlagsToolInterface>(CaseToolConst, flags);
//
// if (!foundCase) {
//     throw new Error(`No case found for this command. More information: https://github.com/p4ck493/ts-is`);
// }
//
// const key: CaseEnum =
//     CaseEnum[foundCase as keyof typeof CaseEnum];

// recordOfCases[key].apply({ // Context
//     result,
//     targetApply,
//     argumentList,
//     lists,
// });

/**
 *
 * @param lists
 */
function proxyRecursiveApply(
    lists: ListsProxyEngineInterface,
): proxyRecursiveApplyType {
    return (targetApply, thisArg, argumentList) => {
        let result;

        // TODO
        return result;
    };
}

export default proxyRecursiveApply;
