import {MethodInterface, ProxyMethodsInterface} from '../../interfaces/methods.interface';

/**
 * Use this const for register classes.
 * Example:
 * class PersonModel {
 *     public name: string;
 * }
 *
 * Object.assign(models, {PersonModel})
 *
 * Or you can use decorator:
 *
 * @RegisterInIsDecorator
 * class PersonModel {
 *     public name: string;
 * }
 *
 */
// TODO find how we can add only autocomplete
export const methods: ProxyMethodsInterface & MethodInterface = {
    array: (() => {
    }) as any,
    bigInt: (() => {
    }) as any,
    boolean: (() => {
    }) as any,
    compare: (() => {
    }) as any,
    empty: (() => {
    }) as any,
    false: (() => {
    }) as any,
    falsy: (() => {
    }) as any,
    function: (() => {
    }) as any,
    instanceof: (() => {
    }) as any,
    null: (() => {
    }) as any,
    number: (() => {
    }) as any,
    object: (() => {
    }) as any,
    string: (() => {
    }) as any,
    symbol: (() => {
    }) as any,
    true: (() => {
    }) as any,
    truthy: (() => {
    }) as any,
    undefined: (() => {
    }) as any
};
