"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursive = void 0;
const wrappers_1 = __importDefault(require("../../../wrappers"));
const methods_1 = require("../../methods");
const apply_recursive_proxy_engine_1 = __importDefault(require("./apply.recursive.proxy.engine"));
const get_recursive_proxy_engine_1 = __importDefault(require("./get.recursive.proxy.engine"));
/**
 *
 * @param index for to know which method use in wrapper
 * @param target object for next proxy
 * @param name of current part of command is.object.not.empty() ['is', 'object', 'not', 'empty']
 * @param lists of all
 */
function proxyRecursive(index, target, name, lists) {
    let newTarget = methods_1.methods; // TODo interface
    let notFound = true;
    if (Reflect.has(methods_1.methods, name)) {
        notFound = false;
        newTarget = methods_1.methods[name];
        lists.methods.push({
            name,
            index,
            method: newTarget
        });
    }
    if (wrappers_1.default.hasOwnProperty(name)) {
        notFound = false;
        lists[name].push({
            name,
            index,
            method: wrappers_1.default[name]
        });
    }
    if (notFound) {
        throw new Error(`Not found propery with name: ${name}`);
    }
    return new Proxy(newTarget, {
        get: (0, get_recursive_proxy_engine_1.default)(index + 1, lists),
        apply: (0, apply_recursive_proxy_engine_1.default)(lists),
    });
}
exports.proxyRecursive = proxyRecursive;
