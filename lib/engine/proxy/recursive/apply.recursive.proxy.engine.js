import OrCaseEngine from '../../cases/or.case.engine';
import WrapperOrCaseEngine from '../../cases/wrapper-or.case.engine';
import {findKey} from '../../../tools/find-key.tool';
import {CaseConst} from '../../../consts/case.const';
import CaseEnum from '../../../enums/case.enum';
import AndCaseEngine from '../../cases/and.case.engine';
import WrapperAndCaseEngine from '../../cases/wrapper-and.case.engine';

const recordOfCases = {
    [CaseEnum.AND]: AndCaseEngine,
    [CaseEnum.OR]: OrCaseEngine,
    [CaseEnum.WRAPPER_OR]: WrapperOrCaseEngine,
    [CaseEnum.WRAPPER_AND]: WrapperAndCaseEngine,
};
function proxyRecursiveApply(lists) {
    return (targetApply, thisArg, argumentList) => {
        const flags = {
            or: !!lists?.or?.length,
            wrapper: !!lists?.all?.length || !!lists?.not?.length,
        };
        const foundCase = findKey(CaseConst, flags);
        if (!foundCase) {
            throw new Error(`No case found for this command. More information: https://github.com/p4ck493/ts-is`);
        }
        const key = CaseEnum[foundCase];
        const context = {
            targetApply,
            argumentList,
            lists,
        };
        return recordOfCases[key].runCase.call(context);
    };
}
export default proxyRecursiveApply;
