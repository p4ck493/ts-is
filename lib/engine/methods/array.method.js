"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayMethod = void 0;
const index_1 = require("./index");
function ArrayMethod(argument, classRef) {
    if (argument instanceof Array) {
        if (index_1.methods.function(classRef)) {
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
