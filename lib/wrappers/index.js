"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeWrappers = exports.beforeWrappers = exports.afterWrappers = void 0;
const not_wrapper_1 = require("./after/not.wrapper");
const all_wrapper_1 = require("./before/all.wrapper");
exports.afterWrappers = {
    Not: not_wrapper_1.NotWrapper,
};
exports.beforeWrappers = {
    All: all_wrapper_1.AllWrapper,
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
exports.typeWrappers = {};
