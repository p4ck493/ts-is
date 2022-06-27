import {afterWrapperType, beforeWrapperType, connectionWrapperType} from '../../../types/wrapper.type';

export interface ListsProxyEngineInterface {
  beforeWrapper: beforeWrapperType[];
  afterWrapper: afterWrapperType[];
  connectionWrapper: connectionWrapperType[];
  methods: any[];
  models: any[];
}
