export declare const afterWrappers: {
    Not: import("../types/wrapper.type").afterWrapperType;
};
export declare const beforeWrappers: {
    All: import("../types/wrapper.type").beforeWrapperType;
};
/**
 * Use this const for register classes.
 * Example:
 * class PersonModel {
 *     public name: string;
 * }
 *
 * Object.assign(modelWrappers, {PersonModel})
 *
 * Or you can use decorator:
 *
 * @RegisterInIsDecorator
 * class PersonModel {
 *     public name: string;
 * }
 *
 */
export declare const modelWrappers: {};
