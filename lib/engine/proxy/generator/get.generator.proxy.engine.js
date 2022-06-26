"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyGeneratorGet = void 0;
const recursive_1 = require("../recursive");
function proxyGeneratorGet() {
    return (target, name) => {
        // TODO add proxy on flags and handle on set, change status of action when changed the value
        return (0, recursive_1.proxyRecursive)(target, name, {
            AfterWrapper: false,
            BeforeWrapper: false,
            Method: false,
            ModelWrapper: false,
            ConnectionWrapper: false,
        }, {
            beforeWrapper: [],
            afterWrapper: [],
            connectionWrapper: [],
            methods: [],
            models: []
        });
    };
}
exports.proxyGeneratorGet = proxyGeneratorGet;
