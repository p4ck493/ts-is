"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseMethod = void 0;
const object_method_1 = require("./object.method");
const function_method_1 = require("./function.method");
function PromiseMethod(argument) {
    if ((0, object_method_1.ObjectMethod)(argument) && Reflect.has(argument, 'then') && Reflect.has(argument, 'catch')) {
        return (0, function_method_1.FunctionMethod)(argument['then']) && (0, function_method_1.FunctionMethod)(argument['catch']);
    }
    return false;
}
exports.PromiseMethod = PromiseMethod;
