"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @method Instanceof
 * @param argument object
 * @param classRef link to model
 */
function InstanceofMethod(argument, classRef) {
    const context = this; // TODO ContextMethodInterface
    // console.log(context);
    return argument instanceof classRef;
}
exports.default = InstanceofMethod;
