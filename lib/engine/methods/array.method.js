"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayMethod = void 0;
const function_method_1 = require("./function.method");
function ArrayMethod(argument, classRef) {
    if (argument instanceof Array) {
        if ((0, function_method_1.FunctionMethod)(classRef)) {
            if (argument.length) {
                return argument.every((item) => item instanceof classRef);
            }
            else {
                return false;
            }
        }
        return true;
    }
    return false;
}
exports.ArrayMethod = ArrayMethod;
