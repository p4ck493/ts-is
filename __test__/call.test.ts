import {is} from '../src';
// function* generator(i: number) {
//     yield i;
//     yield i + 10;
// }

// function resolveAfter2Seconds(x: number) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(x);
//         }, 2000);
//     });
// }
// const AsyncFunction = (async function () {}).constructor;
// // @ts-ignore
// const fn = new AsyncFunction(
//     'a',
//     'b',
//     'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);',
// );
//

const newProxy = new Proxy<String>(new String(''), {
    set: function (target, key, value) {
        if (key === "current") {
            Reflect.set(target, key, value);
            return true;
        }
        return false;
    }
});

describe('Call Test', function () {
    it('Call is.Function', () => {
        expect(is.Function(is.string)).toBeTruthy();
    });
    //
    // it('Call is.Function', () => {
    //     // console.log(is.Function(generator(1)));
    //     // console.log(generator(1).next());
    //     try {
    //
    //         // console.log(is.string instanceof Function);
    //         // console.log(is.instanceof(is.string, Function));
    //         // console.log(typeof fn);
    //         // console.log(is.Function(fn));
    //         // console.log(is.Function(fn(1)));
    //         // console.log(Object.prototype.toString.call(fn(1, 2)));
    //         // console.log(Object.prototype.toString.call(fn(1,2)()));
    //         // console.log(toString.call(fn));
    //         console.log(toString.call(newProxy));
    //         // console.log(toString.call(generator(1)));
    //         // console.log(toString.call(() => {}));
    //     } catch (e) {
    //         if (is.TypeError(e)) {
    //             console.log(e.message === 'Cannot create proxy with a non-object as target or handler');
    //         }
    //     }
    //     expect(is.function(is.string)).toBeTruthy();
    // });
});
