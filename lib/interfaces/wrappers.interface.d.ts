import {mixinWrapperAndMethodsTypes} from '../types/wrapper.type';

export interface BeforeWrappersInterface {
    All: mixinWrapperAndMethodsTypes & AfterWrappersInterface;
}
export interface AfterWrappersInterface {
    Not: mixinWrapperAndMethodsTypes;
}
