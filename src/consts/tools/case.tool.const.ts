import {CaseToolEnum} from '../../enums/tools/case.tool.enum';
import {FlagsToolInterface} from '../../interfaces/tools/flags.tool.interface';

export const CaseToolConst: { [key in keyof typeof CaseToolEnum]: FlagsToolInterface } = {
  Model: {
    Method: false,
    ModelWrapper: true,
    BeforeWrapper: false,
    AfterWrapper: false,
    ConnectionWrapper: false,
  },
  Method: {
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: false,
    AfterWrapper: false,
    ConnectionWrapper: false,
  },
  AfterWrapperAndMethod: {
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: false,
    AfterWrapper: true,
    ConnectionWrapper: false,
  },
  BeforeWrapperAndMethod: {
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: true,
    AfterWrapper: false,
    ConnectionWrapper: false,
  },
  BeforeAndAfterWrapperAndMethod: {
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: true,
    AfterWrapper: true,
    ConnectionWrapper: false,
  },
  BeforeWrapperAndModel: {
    Method: false,
    ModelWrapper: true,
    BeforeWrapper: true,
    AfterWrapper: false,
    ConnectionWrapper: false,
  },
  AfterWrapperAndModel: {
    Method: false,
    ModelWrapper: true,
    BeforeWrapper: false,
    AfterWrapper: true,
    ConnectionWrapper: false,
  },
  BeforeAndAfterWrapperAndModel: {
    Method: false,
    ModelWrapper: true,
    BeforeWrapper: true,
    AfterWrapper: true,
    ConnectionWrapper: false,
  },
  BeforeAndConnectionAndAfterWrapperAndMethod: {
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: true,
    AfterWrapper: true,
    ConnectionWrapper: true,
  },
  BeforeAndConnectionWrapperAndMethod: {
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: true,
    AfterWrapper: false,
    ConnectionWrapper: true,
  },
  ConnectionAndAfterWrapperAndMethod: {
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: false,
    AfterWrapper: true,
    ConnectionWrapper: true,
  },
  ConnectionWrapperAndMethod: {
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: false,
    AfterWrapper: false,
    ConnectionWrapper: true,
  },
};
