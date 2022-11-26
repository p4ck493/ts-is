import {FlagsToolInterface} from '../interfaces/tools/flags.tool.interface';

export const CaseConst: { [key in 'OR' | 'AND' | 'WRAPPER_OR' | 'WRAPPER_AND']: FlagsToolInterface } = {
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
