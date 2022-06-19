import {NotWrapper} from './after/not.wrapper';
import {AllWrapper} from './before/all.wrapper';

export const afterWrappers = {
  Not: NotWrapper,
};

export const beforeWrappers = {
  All: AllWrapper,
};

/**
 * Use this const for register classes.
 * Example:
 * class PersonModel {
 *     public name: string;
 * }
 *
 * Object.assign(typeWrappers, {PersonModel})
 *
 * Or you can use decorator:
 *
 * @RegisterInIsDecorator
 * class PersonModel {
 *     public name: string;
 * }
 *
 */
export const typeWrappers = {

};
