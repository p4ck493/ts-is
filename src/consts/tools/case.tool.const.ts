import {CaseToolEnum} from '../../enums/tools/case.tool.enum';
import {FlagsToolInterface} from '../../interfaces/tools/flags.tool.interface';

export const CaseToolConst: { [key in keyof typeof CaseToolEnum]: FlagsToolInterface } = {
  Model: {
    Method: false,
    ModelWrapper: true,
    BeforeWrapper: false,
    AfterWrapper: false,
  },
  Method: {
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: false,
    AfterWrapper: false,
  },
  AfterWrapperAndMethod: {
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: false,
    AfterWrapper: true,
  },
  BeforeWrapperAndMethod: {
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: true,
    AfterWrapper: false,
  },
  BeforeAndAfterWrapperAndMethod: {
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: true,
    AfterWrapper: true,
  },
  BeforeWrapperAndModel: {
    Method: false,
    ModelWrapper: true,
    BeforeWrapper: true,
    AfterWrapper: false,
  },
  AfterWrapperAndModel: {
    Method: false,
    ModelWrapper: true,
    BeforeWrapper: false,
    AfterWrapper: true,
  },
  BeforeAndAfterWrapperAndModel: {
    Method: false,
    ModelWrapper: true,
    BeforeWrapper: true,
    AfterWrapper: true,
  },
};
