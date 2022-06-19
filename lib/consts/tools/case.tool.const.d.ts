import {CaseToolEnum} from '../../enums/tools/case.tool.enum';
import {FlagsToolInterface} from '../../interfaces/tools/flags.tool.interface';

export declare const CaseToolConst: {
    [key in keyof typeof CaseToolEnum]: FlagsToolInterface;
};
