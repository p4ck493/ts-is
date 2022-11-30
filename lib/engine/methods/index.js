"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
const array_method_1 = require("./array.method");
const bigInt_method_1 = require("./bigInt.method");
const boolean_method_1 = require("./boolean.method");
const compare_method_1 = require("./compare.method");
const empty_method_1 = require("./empty.method");
const false_method_1 = require("./false.method");
const falsy_method_1 = require("./falsy.method");
const function_method_1 = require("./function.method");
const instanceof_method_1 = require("./instanceof.method");
const null_method_1 = require("./null.method");
const number_method_1 = require("./number.method");
const object_method_1 = require("./object.method");
const string_method_1 = require("./string.method");
const symbol_method_1 = require("./symbol.method");
const true_method_1 = require("./true.method");
const truthy_method_1 = require("./truthy.method");
const undefined_method_1 = require("./undefined.method");
const zero_method_1 = require("./zero.method");
const primitive_method_1 = require("./primitive.method");
exports.methods = {
    array: array_method_1.ArrayMethod,
    bigInt: bigInt_method_1.BigIntMethod,
    boolean: boolean_method_1.BooleanMethod,
    compare: compare_method_1.CompareMethod,
    empty: empty_method_1.EmptyMethod,
    false: false_method_1.FalseMethod,
    falsy: falsy_method_1.FalsyMethod,
    function: function_method_1.FunctionMethod,
    instanceof: instanceof_method_1.InstanceofMethod,
    null: null_method_1.NullMethod,
    number: number_method_1.NumberMethod,
    object: object_method_1.ObjectMethod,
    string: string_method_1.StringMethod,
    symbol: symbol_method_1.SymbolMethod,
    true: true_method_1.TrueMethod,
    truthy: truthy_method_1.TruthyMethod,
    undefined: undefined_method_1.UndefinedMethod,
    zero: zero_method_1.ZeroMethod,
    primitive: primitive_method_1.PrimitiveMethod
};
