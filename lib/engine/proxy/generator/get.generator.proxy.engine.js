"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyGeneratorGet = void 0;
const recursive_1 = require("../recursive");
function proxyGeneratorGet() {
    return (target, name) => {
        return (0, recursive_1.proxyRecursive)(0, target, name, {
            lastCommandIsCall: false,
            lastCommandIsApply: false,
            all: [],
            not: [],
            or: [],
            methods: [],
        });
    };
}
exports.proxyGeneratorGet = proxyGeneratorGet;
