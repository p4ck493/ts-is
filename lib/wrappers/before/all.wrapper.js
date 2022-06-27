"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllWrapper = void 0;
const array_method_1 = require("../../methods/array.method");
const empty_array_method_1 = require("../../methods/empty-array.method");
/**
 *
 * @method All
 * @param targetApply must be method
 * @param argumentsList must be
 * @param secondArgument TODO text
 * @param previousValue TODO text
 */
const AllWrapper = (targetApply, argumentsList, secondArgument, previousValue) => {
    const execute = (...args) => {
        return args.every((argument) => {
            if ((0, array_method_1.ArrayMethod)(argument) && argument.length) {
                if (targetApply instanceof empty_array_method_1.EmptyArrayMethod) {
                    if (argument.some((item) => (0, array_method_1.ArrayMethod)(item))) {
                        return execute(...argument);
                    }
                }
                else {
                    return execute(...argument);
                }
            }
            return targetApply.call(this, argument, secondArgument);
        });
    };
    return execute(...argumentsList);
};
exports.AllWrapper = AllWrapper;
