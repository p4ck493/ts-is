import {FlagsToolInterface} from '../interfaces/tools/flags.tool.interface';
import {CaseEnum} from '../enums/case.enum';

export declare const CaseConst: {
    [key in keyof typeof CaseEnum]: FlagsToolInterface;
};
