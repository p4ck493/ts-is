import {NotWrapper} from './not.wrapper';
import {WrappersInterface} from '../interfaces/wrappers.interface';
import {mixinWrapperAndMethodsTypes} from '../types/wrapper.type';

export const wrappers: WrappersInterface = {
    Not: (NotWrapper as mixinWrapperAndMethodsTypes)
}
