import { ListsProxyEngineInterface } from '../../../interfaces/engine/proxy/lists.proxy.engine.interface';
import { OrCaseEngine } from '../../cases/or.case.engine';
import { WrapperOrCaseEngine } from '../../cases/wrapper-or.case.engine';
import { CaseConst } from '../../../consts/case.const';
import { AndCaseEngine } from '../../cases/and.case.engine';
import { WrapperAndCaseEngine } from '../../cases/wrapper-and.case.engine';
import ContextCaseInterface from '../../../interfaces/context-case.interface';
import { BaseCaseEngine } from '../../cases/base.case.engine';
import { FlagsToolInterface } from '../../../interfaces/tools/flags.tool.interface';

type proxyRecursiveApplyType = (
  targetApply: any,
  thisArg: unknown,
  argumentList: unknown[] & unknown[][],
) => ReturnType<typeof targetApply>;

const recordOfCases: Record<string, BaseCaseEngine> = {
  [JSON.stringify(CaseConst.AND)]: AndCaseEngine,
  [JSON.stringify(CaseConst.OR)]: OrCaseEngine,
  [JSON.stringify(CaseConst.WRAPPER_OR)]: WrapperOrCaseEngine,
  [JSON.stringify(CaseConst.WRAPPER_AND)]: WrapperAndCaseEngine,
};

export function proxyRecursiveApply(lists: ListsProxyEngineInterface): proxyRecursiveApplyType {
  return (targetApply, thisArg, argumentList): boolean => {
    const flags: FlagsToolInterface = {
      or: !!lists?.or?.length,
      wrapper: !!lists?.all?.length || !!lists?.not?.length,
    };

    const foundCase = recordOfCases[JSON.stringify(flags)];

    if (!foundCase) {
      throw new Error(`No case found for this command. More information: https://github.com/p4ck493/ts-is`);
    }

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

    return foundCase.runCase.call(context);
  };
}
