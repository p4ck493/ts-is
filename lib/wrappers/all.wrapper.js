"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method All
 * @param targetApply must be method
 * @param argumentsList must be
 * @param secondArgument TODO text
 * @param previousValue TODO text
 */
function AllWrapper(targetApply, argumentsList, secondArgument, previousValue) {
    const execute = (...args) => {
        return false;
        // return args.every((argument: unknown): boolean => {
        //     if (ArrayMethod.method(argument) && argument.length) {
        //         if (targetApply instanceof EmptyMethod.method) {
        //             if (argument.some((item) => ArrayMethod.method(item))) {
        //                 return execute(...argument);
        //             }
        //         } else {
        //             return execute(...argument);
        //         }
        //     }
        //     return targetApply.call(this, argument, secondArgument, previousValue);
        // });
    };
    return execute(...argumentsList);
}
exports.default = AllWrapper;
