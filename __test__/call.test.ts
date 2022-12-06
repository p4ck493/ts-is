import {is} from '../src';

describe('Call Test', function () {
    it('Call is.string', () => {
        // console.log(is.string instanceof Function);
        // console.log(is.instanceof(is.string, Function));
        // console.log(is.function(is.string));
        expect(is.Function(is.string)).toBeTruthy();
    })
});
