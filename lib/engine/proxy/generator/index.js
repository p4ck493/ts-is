"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyGenerator = void 0;
const get_generator_proxy_engine_1 = require("./get.generator.proxy.engine");
const apply_generator_proxy_engine_1 = require("./apply.generator.proxy.engine");
/**
 *
 * @param defaultFunction must be method
 */
function proxyGenerator(defaultFunction) {
    return new Proxy(defaultFunction, {
        get: (0, get_generator_proxy_engine_1.proxyGeneratorGet)(),
        apply: (0, apply_generator_proxy_engine_1.proxyGeneratorApply)(),
    });
}
exports.proxyGenerator = proxyGenerator;
