"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const instanceof_method_1 = __importDefault(require("./instanceof.method"));
/**
 *
 * @method date
 * @example
 * is.date()
 * is.not.date()
 * is.all.date()
 * is.all.not.date()
 */
function DateMethod(argument) {
    return (0, instanceof_method_1.default)(argument, Date);
}
exports.default = DateMethod;
