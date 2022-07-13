import {MethodInterface, MethodsInterface} from '../../interfaces/methods.interface';

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
// @ts-ignore
const methods: MethodsInterface & MethodInterface = {};

export default methods;
