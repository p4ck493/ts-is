"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_method_1 = __importDefault(require("../engine/methods/array.method"));
const empty_method_1 = __importDefault(require("../engine/methods/empty.method"));
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
        return args.every((argument) => {
            if (array_method_1.default.method(argument) && argument.length) {
                if (targetApply instanceof empty_method_1.default.method) {
                    if (argument.some((item) => array_method_1.default.method(item))) {
                        return execute(...argument);
                    }
                }
                else {
                    return execute(...argument);
                }
            }
            return targetApply.call(this, argument, secondArgument, previousValue);
        });
    };
    return execute(...argumentsList);
}
exports.default = AllWrapper;
