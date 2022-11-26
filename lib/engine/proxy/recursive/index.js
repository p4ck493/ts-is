"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursive = void 0;
const wrappers_1 = require("../../../wrappers");
const methods_1 = require("../../methods");
const apply_recursive_proxy_engine_1 = require("./apply.recursive.proxy.engine");
const get_recursive_proxy_engine_1 = require("./get.recursive.proxy.engine");
/**
 *
 * @param index for to know which method use in wrapper
 * @param target object for next proxy
 * @param name of current part of command is.object.not.empty() ['is', 'object', 'not', 'empty']
 * @param lists of all
 */
function proxyRecursive(index, target, name, lists) {
    var _a, _b, _c, _d;
    let newTarget = methods_1.methods; // TODO interface
    lists.lastCommandIsCall = name === 'call';
    lists.lastCommandIsApply = name === 'apply';
    if (lists.lastCommandIsCall || lists.lastCommandIsApply) {
        newTarget = (_d = (_c = (_b = (_a = lists === null || lists === void 0 ? void 0 : lists.methods) === null || _a === void 0 ? void 0 : _a.at) === null || _b === void 0 ? void 0 : _b.call(_a, -1)) === null || _c === void 0 ? void 0 : _c.method) !== null && _d !== void 0 ? _d : true;
    }
    else {
        let notFound = true;
        if (notFound) {
            if (Reflect.has(methods_1.methods, name)) {
                notFound = false;
                newTarget = methods_1.methods[name];
                lists.methods.push({
                    name,
                    index,
                    method: newTarget,
                });
            }
            if (wrappers_1.wrappers.hasOwnProperty(name)) {
                notFound = false;
                lists[name].push({
                    name,
                    index,
                    method: wrappers_1.wrappers[name],
                });
            }
        }
        if (notFound) {
            throw new Error(`Not found propery with name: ${name}`);
        }
    }
    return new Proxy(newTarget, {
        get: (0, get_recursive_proxy_engine_1.proxyRecursiveGet)(index + 1, lists),
        apply: (0, apply_recursive_proxy_engine_1.proxyRecursiveApply)(lists),
    });
}
exports.proxyRecursive = proxyRecursive;
