"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const truthy_method_1 = __importDefault(require("../engine/methods/truthy.method"));
/**
 *
 * @method Or
 */
function OrWrapper(argument, targetApplyList, secondArgumentList) {
    return targetApplyList.reduce((previousValue, currentValue, currentIndex) => {
        if (truthy_method_1.default.method(previousValue)) {
            return previousValue;
        }
        return currentValue.call(this, argument, secondArgumentList === null || secondArgumentList === void 0 ? void 0 : secondArgumentList[currentIndex]);
    }, null);
}
exports.default = OrWrapper;
