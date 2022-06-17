"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllWrapper = void 0;
/**
 *
 * @param targetApply must be method
 * @param argumentsList must be
 */
const AllWrapper = (targetApply, argumentsList) => {
    const execute = (...args) => {
        return args.every((argument) => {
            if (Array.isArray(argument) && (argument === null || argument === void 0 ? void 0 : argument.length)) {
                return execute(...argument);
            }
            return targetApply(argument);
        });
    };
    return execute(...argumentsList);
};
exports.AllWrapper = AllWrapper;
