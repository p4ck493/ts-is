"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 *
 * @param index
 * @param lists
 */
function proxyRecursiveGet(index, lists) {
    console.log('proxyRecursiveGet', 'index', index);
    return (targetGet, nameGet) => {
        console.log(targetGet, nameGet);
        return (0, index_1.proxyRecursive)(index, targetGet[nameGet], nameGet, lists);
    };
}
exports.default = proxyRecursiveGet;
