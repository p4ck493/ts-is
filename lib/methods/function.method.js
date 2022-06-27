"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionMethod = void 0;
/**
 *
 * @method Function
 * @example
 * Is.Function()
 * Is.Not.Function()
 * Is.All.Function()
 * Is.All.Not.Function()
 *
 * // With generic
 * Is.Function<PersonModel>()
 * Is.Not.Function<PersonModel>()
 * Is.All.Function<PersonModel>()
 * Is.All.Not.Function<PersonModel>()
 */
function FunctionMethod(argument) {
    return {}.toString.call(argument) === '[object Function]';
}
exports.FunctionMethod = FunctionMethod;
