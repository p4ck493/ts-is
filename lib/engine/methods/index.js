"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
const array_method_1 = __importDefault(require("./array.method"));
const bigInt_method_1 = __importDefault(require("./bigInt.method"));
const boolean_method_1 = __importDefault(require("./boolean.method"));
const compare_method_1 = __importDefault(require("./compare.method"));
const empty_method_1 = __importDefault(require("./empty.method"));
const false_method_1 = __importDefault(require("./false.method"));
const falsy_method_1 = __importDefault(require("./falsy.method"));
const function_method_1 = __importDefault(require("./function.method"));
const instanceof_method_1 = __importDefault(require("./instanceof.method"));
const null_method_1 = __importDefault(require("./null.method"));
const number_method_1 = __importDefault(require("./number.method"));
const object_method_1 = __importDefault(require("./object.method"));
const string_method_1 = __importDefault(require("./string.method"));
const symbol_method_1 = __importDefault(require("./symbol.method"));
const true_method_1 = __importDefault(require("./true.method"));
const truthy_method_1 = __importDefault(require("./truthy.method"));
const undefined_method_1 = __importDefault(require("./undefined.method"));
const date_method_1 = __importDefault(require("./date.method"));
const set_method_1 = __importDefault(require("./set.method"));
const error_method_1 = __importDefault(require("./error.method"));
const eval_error_method_1 = __importDefault(require("./eval-error.method"));
const reference_error_method_1 = __importDefault(require("./reference-error.method"));
const syntax_error_method_1 = __importDefault(require("./syntax-error.method"));
const type_error_method_1 = __importDefault(require("./type-error.method"));
const uri_error_method_1 = __importDefault(require("./uri-error.method"));
const regexp_method_1 = __importDefault(require("./regexp.method"));
const map_method_1 = __importDefault(require("./map.method"));
/**
 * Use this const for register classes.
 * Example:
 * class PersonModel {
 *     public name: string;
 * }
 *
 * Object.assign(models, {PersonModel})
 *
 * Or you can use decorator:
 *
 * @RegisterInIsDecorator
 * class PersonModel {
 *     public name: string;
 * }
 *
 */
// TODO find how we can add only autocomplete
exports.methods = {
    array: array_method_1.default,
    bigInt: bigInt_method_1.default,
    boolean: boolean_method_1.default,
    compare: compare_method_1.default,
    date: date_method_1.default,
    empty: empty_method_1.default,
    error: error_method_1.default,
    evalError: eval_error_method_1.default,
    false: false_method_1.default,
    falsy: falsy_method_1.default,
    function: function_method_1.default,
    instanceof: instanceof_method_1.default,
    map: map_method_1.default,
    null: null_method_1.default,
    number: number_method_1.default,
    object: object_method_1.default,
    referenceError: reference_error_method_1.default,
    regExp: regexp_method_1.default,
    set: set_method_1.default,
    string: string_method_1.default,
    symbol: symbol_method_1.default,
    syntaxError: syntax_error_method_1.default,
    true: true_method_1.default,
    truthy: truthy_method_1.default,
    typeError: type_error_method_1.default,
    undefined: undefined_method_1.default,
    URIError: uri_error_method_1.default,
};
