"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyRecursiveApply = void 0;
const methods_1 = require("../../methods");
function proxyRecursiveApply(params) {
    return (targetApply, thisArg, argumentList) => {
        console.log(globalThis);
        console.log(params.commandList);
        console.log('params', params, 'targetApply', targetApply, 'thisArg', thisArg, 'argumentList', argumentList);
        // TODO call apply
        // if (params.lastCommandIsCall) {
        //     argumentList.splice(0, 1);
        // }
        //
        // if (params.lastCommandIsApply) {
        //     argumentList = argumentList[1] as any;
        // }
        const list = convertListToFinaleList(params.commandList, argumentList);
        console.log('list', list);
        const result = customReduce(list);
        console.log('result', result);
        return result;
    };
}
exports.proxyRecursiveApply = proxyRecursiveApply;
function convertListToFinaleList(list, argumentList) {
    let beforeNewList = [];
    // TODO .all.
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 'not') {
            beforeNewList.push(0);
            continue;
        }
        if (list[i + 1] === 'or') {
            const lastItem = beforeNewList[beforeNewList.length - 1];
            if (Array.isArray(lastItem)) {
                lastItem.push(getResult(list[i], argumentList));
            }
            else {
                beforeNewList.push([getResult(list[i], argumentList)]);
            }
            i++;
            continue;
        }
        if (i > 1 && list[i - 1] === 'or') {
            beforeNewList[beforeNewList.length - 1].push(getResult(list[i], argumentList));
        }
        else {
            beforeNewList.push(getResult(list[i], argumentList));
        }
    }
    return beforeNewList;
}
function getResult(name, argumentList) {
    // TODO call, apply, model, globalThis
    console.log('getResult: ', 'name', name, 'argumentList', argumentList);
    return methods_1.methods[name].apply({}, argumentList);
}
function customReduce(arr) {
    const prev = {
        result: false,
        indexNot: arr.findIndex((a) => a === 0),
        index: 0,
    };
    for (let curr of arr) {
        if (prev.indexNot !== prev.index) {
            if (Array.isArray(curr)) {
                curr = curr.some((t) => t);
            }
            if (prev.index > prev.indexNot && prev.indexNot > -1) {
                curr = !curr;
            }
            if (typeof curr === 'boolean') {
                if (curr) {
                    prev.result = curr;
                }
                else {
                    return false;
                }
            }
        }
        prev.index++;
    }
    return prev.result;
}
;
