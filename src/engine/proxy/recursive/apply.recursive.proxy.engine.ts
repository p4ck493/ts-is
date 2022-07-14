import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';
import orCaseEngine from '../../cases/or.case.engine';
import wrapperOrCaseEngine from '../../cases/wrapper-or.case.engine';
import {findKey} from '../../../tools/find-key.tool';
import {FlagsToolInterface} from '../../../interfaces/tools/flags.tool.interface';
import {CaseConst} from '../../../consts/case.const';
import CaseEnum from '../../../enums/case.enum';
import andCaseEngine from '../../cases/and.case.engine';
import wrapperAndCaseEngine from '../../cases/wrapper-and.case.engine';
import ContextCaseInterface from '../../../interfaces/context-case.interface';

type proxyRecursiveApplyType = (
    targetApply: any,
    thisArg: unknown,
    argumentList: unknown[],
) => ReturnType<typeof targetApply>;

const recordOfCases: { [key: number]: () => boolean } = {
    [CaseEnum.AND]: andCaseEngine,
    [CaseEnum.OR]: orCaseEngine,
    [CaseEnum.WRAPPER_OR]: wrapperOrCaseEngine,
    [CaseEnum.WRAPPER_AND]: wrapperAndCaseEngine,
};

/**
 *
 * @param lists
 */
function proxyRecursiveApply(
    lists: ListsProxyEngineInterface,
): proxyRecursiveApplyType {

    return (targetApply, thisArg, argumentList): boolean => {

        const flags: FlagsToolInterface = {
            or: !!lists?.or?.length,
            wrapper: !!lists?.all?.length || !!lists?.not?.length
        };

        const foundCase = findKey<FlagsToolInterface>(CaseConst, flags);

        if (!foundCase) {
            throw new Error(`No case found for this command. More information: https://github.com/p4ck493/ts-is`);
        }

        const key: CaseEnum = CaseEnum[foundCase as keyof typeof CaseEnum];

        const context: ContextCaseInterface = {
            targetApply,
            argumentList,
            lists,
        };

        return recordOfCases[key].call(context);
    };
}

export default proxyRecursiveApply;
