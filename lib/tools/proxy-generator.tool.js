"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyGenerator = void 0;
const wrappers_1 = require("../wrappers");
const proxyGenerator = (defaultFunction, methodList) => {
    return new Proxy(defaultFunction, {
        get: function (target, name) {
            const wrapper = (targetApply, argumentsList) => {
                return targetApply(...argumentsList);
            };
            return proxyRecursive(target, name, methodList, wrapper);
        },
        apply: function (target, thisArg, argumentList) {
            return target(...argumentList);
        },
    });
};
exports.proxyGenerator = proxyGenerator;
const proxyRecursive = (target, name, methodList, wrapper) => {
    var _a;
    let newTarget = (_a = methodList[name]) !== null && _a !== void 0 ? _a : target;
    if (wrappers_1.wrappers.hasOwnProperty(name)) {
        wrapper = wrappers_1.wrappers[name];
        newTarget = methodList;
    }
    else {
        if (!methodList.hasOwnProperty(name)) {
            throw new Error(`Not found propery with name: ${name}`);
        }
    }
    return new Proxy(newTarget, {
        get: function (targetGet, nameGet) {
            // console.log(targetGet, nameGet);
            return proxyRecursive(targetGet[nameGet], nameGet, targetGet, wrapper);
        },
        apply: function (targetApply, thisArg, argumentList) {
            return wrapper(targetApply, argumentList);
        },
    });
};
