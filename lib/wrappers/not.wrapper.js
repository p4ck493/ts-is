"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotWrapper = void 0;
/**
 *
 * @param targetApply
 * @param argumentsList
 * @constructor
 */
const NotWrapper = (targetApply, argumentsList) => {
    return !targetApply(...argumentsList);
};
exports.NotWrapper = NotWrapper;
