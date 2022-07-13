import {connectionWrapperType} from '../../../types/wrapper.type';
import {wrappers} from '../../../wrappers';

export interface ListsProxyEngineInterface {
    all: {
        index: number;
        name: string;
        wrapper: typeof wrappers;
    }[];
    not: {
        index: number;
        name: string;
        wrapper: typeof wrappers;
    }[];
    connection: {
        index: number;
        name: string;
        connection: connectionWrapperType;
    }[];
    methods: {
        index: number;
        method: any;
        name: string;
    }[];
}
