import {ListsProxyEngineInterface} from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';
import {OrCaseEngine} from '../../cases/or.case.engine';
import {WrapperOrCaseEngine} from '../../cases/wrapper-or.case.engine';
import {findKey} from '../../../tools/find-key.tool';
import {FlagsToolInterface} from '../../../interfaces/tools/flags.tool.interface';
import {CaseConst} from '../../../consts/case.const';
import {CaseEnum} from '../../../enums/case.enum';
import {AndCaseEngine} from '../../cases/and.case.engine';
import {WrapperAndCaseEngine} from '../../cases/wrapper-and.case.engine';
import ContextCaseInterface from '../../../interfaces/context-case.interface';
import {BaseCaseEngine} from '../../cases/base.case.engine';

type proxyRecursiveApplyType = (
    targetApply: any,
    thisArg: unknown,
    argumentList: unknown[] & unknown[][],
) => ReturnType<typeof targetApply>;

const recordOfCases: Record<number, BaseCaseEngine> = {
    [CaseEnum.AND]: AndCaseEngine,
    [CaseEnum.OR]: OrCaseEngine,
    [CaseEnum.WRAPPER_OR]: WrapperOrCaseEngine,
    [CaseEnum.WRAPPER_AND]: WrapperAndCaseEngine,
};

export function proxyRecursiveApply(lists: ListsProxyEngineInterface): proxyRecursiveApplyType {
    return (targetApply, thisArg, argumentList): boolean => {
        const flags: FlagsToolInterface = {
            or: !!lists?.or?.length,
            wrapper: !!lists?.all?.length || !!lists?.not?.length,
        };

        const foundCase = findKey<FlagsToolInterface>(CaseConst, flags);

        if (!foundCase) {
            throw new Error(`No case found for this command. More information: https://github.com/p4ck493/ts-is`);
        }

        const key: CaseEnum = CaseEnum[foundCase as keyof typeof CaseEnum];

        if (lists.lastCommandIsCall) {
            argumentList.splice(0, 1);
        }

        if (lists.lastCommandIsApply) {
            argumentList = argumentList[1] as any;
        }

        const context: ContextCaseInterface = {
            targetApply,
            argumentList,
            lists,
        };

        return (recordOfCases[key] as BaseCaseEngine).runCase.call(context);
    };
}
