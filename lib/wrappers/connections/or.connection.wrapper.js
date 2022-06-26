"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrWrapper = void 0;
const true_method_1 = require("../../methods/true.method");
/**
 *
 * @method Or
 * @param {unknown} argument
 * @param {((...arg: unknown[]) => boolean)[]} targetApplyList
 */
const OrWrapper = (argument, targetApplyList) => {
    return targetApplyList.reduce((previousValue, currentValue) => {
        if ((0, true_method_1.TrueMethod)(previousValue)) {
            return previousValue;
        }
        return currentValue(argument);
    }, null);
};
exports.OrWrapper = OrWrapper;
