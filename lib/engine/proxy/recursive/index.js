"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursive = void 0;
const methods_1 = require("../../methods");
const apply_recursive_proxy_engine_1 = require("./apply.recursive.proxy.engine");
const get_recursive_proxy_engine_1 = require("./get.recursive.proxy.engine");
/**
 *
 * @param target object for next proxy
 * @param name of current part of command is.object.not.empty() ['is', 'object', 'not', 'empty']
 * @param params ParamsProxyEngineInterface
 */
function proxyRecursive(target, name, params) {
    params.commandList.push(name);
    if (['apply', 'call'].includes(name)) {
        target = getMethod(params.commandList.at(-2));
    }
    else {
        target = getMethod(name);
    }
    return new Proxy(target, {
        get: (0, get_recursive_proxy_engine_1.proxyRecursiveGet)(params),
        apply: (0, apply_recursive_proxy_engine_1.proxyRecursiveApply)(params),
    });
}
exports.proxyRecursive = proxyRecursive;
function getMethod(name) {
    if (Reflect.has(methods_1.methods, name)) {
        return methods_1.methods[name];
    }
    return methods_1.methods;
}
