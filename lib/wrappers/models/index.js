"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelWrappers = void 0;
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
exports.modelWrappers = {};
