"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyMethod = void 0;
const index_1 = require("./index");
function EmptyMethod(argument) {
    var _a;
    if (index_1.methods.string(argument) || index_1.methods.object(argument) || index_1.methods.array(argument)) {
        if (index_1.methods.map(argument)) {
            return argument.size === 0;
        }
        return ((_a = Object.keys(argument)) === null || _a === void 0 ? void 0 : _a.length) === 0;
    }
    return false;
}
exports.EmptyMethod = EmptyMethod;
