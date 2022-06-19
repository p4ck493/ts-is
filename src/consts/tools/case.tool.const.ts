import {CaseToolEnum} from "../../enums/tools/case.tool.enum";
import {FlagsToolInterface} from '../../interfaces/tools/flags.tool.interface';

export const CaseToolConst: {[key in keyof typeof CaseToolEnum]: FlagsToolInterface} = {

    Model: {
        Method: false,
        TypeWrapper: true,
        BeforeWrapper: false,
        AfterWrapper: false,
    },
    Method: {
        Method: true,
        TypeWrapper: false,
        BeforeWrapper: false,
        AfterWrapper: false,
    },
    AfterWrapperAndMethod: {
        Method: true,
        TypeWrapper: false,
        BeforeWrapper: false,
        AfterWrapper: true,
    },
    BeforeWrapperAndMethod: {
        Method: true,
        TypeWrapper: false,
        BeforeWrapper: true,
        AfterWrapper: false,
    },
    BeforeAndAfterWrapperAndMethod: {
        Method: true,
        TypeWrapper: false,
        BeforeWrapper: true,
        AfterWrapper: true,
    },
    ModelAndMethod: {
        Method: true,
        TypeWrapper: true,
        BeforeWrapper: false,
        AfterWrapper: false,
    },
    BeforeWrapperAndModel: {
        Method: false,
        TypeWrapper: true,
        BeforeWrapper: true,
        AfterWrapper: false,
    },
    AfterWrapperAndModel: {
        Method: false,
        TypeWrapper: true,
        BeforeWrapper: false,
        AfterWrapper: true,
    },
    AfterWrapperAndModelAndMethod: {
        Method: true,
        TypeWrapper: true,
        BeforeWrapper: false,
        AfterWrapper: true,
    },
    BeforeAndAfterWrapperAndModelAndMethod: {
        Method: true,
        TypeWrapper: true,
        BeforeWrapper: true,
        AfterWrapper: true,
    },

};
