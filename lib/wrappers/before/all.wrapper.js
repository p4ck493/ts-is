"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllWrapper = void 0;
const index_1 = require("../../index");
/**
 *
 * @param targetApply must be method
 * @param argumentsList must be
 * @param previousValue
 */
const AllWrapper = (targetApply, argumentsList, previousValue) => {
    const execute = (...args) => {
        return args.every((argument) => {
            if (index_1.Is.Array(argument) && argument.length) {
                return execute(...argument);
            }
            return targetApply(argument);
        });
    };
    return execute(...argumentsList);
};
exports.AllWrapper = AllWrapper;
