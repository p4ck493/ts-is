import wrappers from '../../../wrappers';

export interface ListsProxyEngineInterface {
  all: {
    index: number;
    name: string;
    method: typeof wrappers;
  }[];
  not: {
    index: number;
    name: string;
    method: typeof wrappers;
  }[];
  or: {
    index: number;
    name: string;
    method: typeof wrappers;
  }[];
  methods: {
    index: number;
    method: any;
    name: string;
  }[];
}
