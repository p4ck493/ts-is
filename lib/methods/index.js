"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Methods = void 0;
const compare_method_1 = require("./compare.method");
const empty_object_method_1 = require("./empty-object.method");
const empty_string_method_1 = require("./empty-string.method");
const false_method_1 = require("./false.method");
const null_method_1 = require("./null.method");
const null_or_undefined_method_1 = require("./null-or-undefined.method");
const null_or_undefined_or_empty_method_1 = require("./null-or-undefined-or-empty.method");
const number_method_1 = require("./number.method");
const true_method_1 = require("./true.method");
const undefined_method_1 = require("./undefined.method");
const empty_method_1 = require("./empty.method");
const array_method_1 = require("./array.method");
const object_method_1 = require("./object.method");
const string_method_1 = require("./string.method");
const boolean_method_1 = require("./boolean.method");
const symbol_method_1 = require("./symbol.method");
const bigint_method_1 = require("./bigint.method");
const function_method_1 = require("./function.method");
const instanceof_method_1 = require("./instanceof.method");
const falsy_method_1 = require("./falsy.method");
const truthy_method_1 = require("./truthy.method");
/**
 * Export all accesses methods in library
 */
exports.Methods = {
    Array: array_method_1.ArrayMethod,
    BigInt: bigint_method_1.BigintMethod,
    Boolean: boolean_method_1.BooleanMethod,
    Compare: compare_method_1.CompareMethod,
    EmptyObject: empty_object_method_1.EmptyObjectMethod,
    EmptyString: empty_string_method_1.EmptyStringMethod,
    False: false_method_1.FalseMethod,
    Falsy: falsy_method_1.FalsyMethod,
    Function: function_method_1.FunctionMethod,
    Instanceof: instanceof_method_1.InstanceofMethod,
    Null: null_method_1.NullMethod,
    NullOrUndefined: null_or_undefined_method_1.NullOrUndefinedMethod,
    NullOrUndefinedOrEmpty: null_or_undefined_or_empty_method_1.NullOrUndefinedOrEmptyMethod,
    Number: number_method_1.NumberMethod,
    String: string_method_1.StringMethod,
    Object: object_method_1.ObjectMethod,
    True: true_method_1.TrueMethod,
    Truthy: truthy_method_1.TruthyMethod,
    Symbol: symbol_method_1.SymbolMethod,
    Undefined: undefined_method_1.UndefinedMethod,
    Empty: empty_method_1.EmptyMethod,
};
