import {CaseToolEnum} from '../../enums/tools/case.tool.enum';

export const CaseToolConst: {[key: string]: CaseToolEnum} = {
  [JSON.stringify({
    Method: false,
    ModelWrapper: true,
    BeforeWrapper: false,
    AfterWrapper: false
  })]: CaseToolEnum.Model,
  [JSON.stringify({
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: false,
    AfterWrapper: false,
  })]: CaseToolEnum.Method,
  [JSON.stringify({
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: false,
    AfterWrapper: true,
  })]: CaseToolEnum.AfterWrapperAndMethod,
  [JSON.stringify({
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: true,
    AfterWrapper: false,
  })]: CaseToolEnum.BeforeWrapperAndMethod,
  [JSON.stringify({
    Method: true,
    ModelWrapper: false,
    BeforeWrapper: true,
    AfterWrapper: true,
  })]: CaseToolEnum.BeforeAndAfterWrapperAndMethod,
  [JSON.stringify({
    Method: false,
    ModelWrapper: true,
    BeforeWrapper: true,
    AfterWrapper: false,
  })]: CaseToolEnum.BeforeWrapperAndModel,
  [JSON.stringify({
    Method: false,
    ModelWrapper: true,
    BeforeWrapper: false,
    AfterWrapper: true,
  })]: CaseToolEnum.AfterWrapperAndModel,
  [JSON.stringify({
    Method: false,
    ModelWrapper: true,
    BeforeWrapper: true,
    AfterWrapper: true,
  })]: CaseToolEnum.BeforeAndAfterWrapperAndModel,
}
