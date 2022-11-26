"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastChannelMethod = void 0;
const index_1 = require("./index");
function BroadcastChannelMethod(argument) {
    return index_1.methods.instanceof(argument, BroadcastChannel);
}
exports.BroadcastChannelMethod = BroadcastChannelMethod;
