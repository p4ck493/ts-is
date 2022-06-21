"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyGenerator = void 0;
const proxy_recursive_engine_1 = require("./proxy-recursive.engine");
function proxyGeneratorGet() {
    return (target, name) => {
        const flags = {
            AfterWrapper: false,
            BeforeWrapper: false,
            Method: false,
            ModelWrapper: false,
        };
        return (0, proxy_recursive_engine_1.proxyRecursive)(target, name, flags, [], []);
    };
}
function proxyGeneratorApply() {
    return (target, thisArg, argumentList) => {
        return target(...argumentList);
    };
}
/**
 *
 * @param defaultFunction must be method
 */
function proxyGenerator(defaultFunction) {
    return new Proxy(defaultFunction, {
        get: proxyGeneratorGet(),
        apply: proxyGeneratorApply(),
    });
}
exports.proxyGenerator = proxyGenerator;
