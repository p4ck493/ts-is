"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrWrapper = void 0;
const true_method_1 = require("../../methods/true.method");
/**
 *
 * @method Or
 * @param {unknown} argument
 * @param {((...arg: unknown[]) => boolean)[]} targetApplyList
 * @param {unknown[]} secondArgumentList
 */
const OrWrapper = (argument, targetApplyList, secondArgumentList) => {
    return targetApplyList.reduce((previousValue, currentValue, currentIndex) => {
        if ((0, true_method_1.TrueMethod)(previousValue)) {
            return previousValue;
        }
        return currentValue.call(this, argument, secondArgumentList === null || secondArgumentList === void 0 ? void 0 : secondArgumentList[currentIndex]);
    }, null);
};
exports.OrWrapper = OrWrapper;
