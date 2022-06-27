"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursive = void 0;
const wrappers_1 = require("../../../wrappers");
const methods_1 = require("../../../methods");
const apply_recursive_proxy_engine_1 = require("./apply.recursive.proxy.engine");
const get_recursive_proxy_engine_1 = require("./get.recursive.proxy.engine");
function checkFlags(flags, name) {
    const notFoundAnyMethods = Object.values(flags).map((property) => property);
    if (notFoundAnyMethods.every((item) => !item)) {
        throw new Error(`Not found propery with name: ${name}`);
    }
}
/**
 *
 * Wrappers
 * After: Is.Not.Boolean(0)
 * Before: Is.All.Boolean([true, false])
 * Mixin: Is.All.Not.Boolean([true, false, [0]])
 *
 *
 */
function proxyRecursive(target, name, flags, lists) {
    var _a;
    let newTarget = methods_1.Methods;
    if (methods_1.Methods.hasOwnProperty(name)) {
        flags.Method = true;
        newTarget = (_a = methods_1.Methods[name]) !== null && _a !== void 0 ? _a : target;
        const methods = methods_1.Methods[name]; // TODO interface
        if (!lists.methods.includes(methods)) {
            lists.methods.push(methods);
        }
    }
    if (wrappers_1.modelWrappers.hasOwnProperty(name)) {
        flags.ModelWrapper = true;
        newTarget = wrappers_1.modelWrappers[name];
        const models = wrappers_1.modelWrappers[name];
        if (!lists.models.includes(models)) {
            lists.models.push(models);
        }
    }
    if (wrappers_1.beforeWrappers.hasOwnProperty(name)) {
        flags.BeforeWrapper = true;
        const beforeWrapper = wrappers_1.beforeWrappers[name];
        if (!lists.beforeWrapper.includes(beforeWrapper)) {
            lists.beforeWrapper.push(beforeWrapper);
        }
    }
    if (wrappers_1.afterWrappers.hasOwnProperty(name)) {
        flags.AfterWrapper = true;
        const afterWrapper = wrappers_1.afterWrappers[name];
        if (!lists.afterWrapper.includes(afterWrapper)) {
            lists.afterWrapper.push(afterWrapper);
        }
    }
    if (wrappers_1.connectionWrappers.hasOwnProperty(name)) {
        flags.ConnectionWrapper = true;
        const connectionWrapper = wrappers_1.connectionWrappers[name];
        if (!lists.connectionWrapper.includes(connectionWrapper)) {
            lists.connectionWrapper.push(connectionWrapper);
        }
    }
    checkFlags(flags, name);
    return new Proxy(newTarget, {
        get: (0, get_recursive_proxy_engine_1.proxyRecursiveGet)(flags, lists),
        apply: (0, apply_recursive_proxy_engine_1.proxyRecursiveApply)(flags, lists),
    });
}
exports.proxyRecursive = proxyRecursive;
