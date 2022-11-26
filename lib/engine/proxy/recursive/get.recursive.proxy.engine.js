"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursiveGet = void 0;
const index_1 = require("./index");
function proxyRecursiveGet(index, lists) {
    return (targetGet, nameGet) => {
        return (0, index_1.proxyRecursive)(index, targetGet[nameGet], nameGet, lists);
    };
}
exports.proxyRecursiveGet = proxyRecursiveGet;
