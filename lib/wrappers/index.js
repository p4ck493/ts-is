"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const not_wrapper_1 = __importDefault(require("./not.wrapper"));
const all_wrapper_1 = __importDefault(require("./all.wrapper"));
const or_connection_wrapper_1 = __importDefault(require("./or.connection.wrapper"));
// TODO interfaces
const wrappers = {
    not: not_wrapper_1.default,
    all: all_wrapper_1.default,
    or: or_connection_wrapper_1.default,
};
exports.default = wrappers;
