import { FlagsToolInterface } from '../interfaces/tools/flags.tool.interface';
import CaseEnum from '../enums/case.enum';

export const CaseConst: { [key in keyof typeof CaseEnum]: FlagsToolInterface } = {
  OR: {
    or: true,
    wrapper: false,
  },
  WRAPPER_OR: {
    or: true,
    wrapper: true,
  },
  WRAPPER_AND: {
    or: false,
    wrapper: true,
  },
  AND: {
    or: false,
    wrapper: false,
  },
};
