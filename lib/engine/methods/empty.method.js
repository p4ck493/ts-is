"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 *
 * @method empty
 * Empty is: '', {}, [].
 * @param argument is any type
 */
function EmptyMethod(argument) {
    var _a;
    if (index_1.methods.string(argument) || index_1.methods.object(argument) || index_1.methods.array(argument)) {
        return ((_a = Object.keys(argument)) === null || _a === void 0 ? void 0 : _a.length) === 0;
    }
    return false;
}
exports.default = EmptyMethod;
