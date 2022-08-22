"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function proxyRecursiveGet(index, lists) {
    return (targetGet, nameGet) => {
        return (0, index_1.proxyRecursive)(index, targetGet[nameGet], nameGet, lists);
    };
}
exports.default = proxyRecursiveGet;
