"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursiveGet = void 0;
const index_1 = require("./index");
function proxyRecursiveGet(params) {
    return (targetGet, nameGet) => {
        return (0, index_1.proxyRecursive)(targetGet[nameGet], nameGet, params);
    };
}
exports.proxyRecursiveGet = proxyRecursiveGet;
