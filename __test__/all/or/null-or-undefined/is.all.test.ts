import {dataForBadTesting, dataForGoodTesting} from './state';
import {is} from '../../../../lib';


describe('is.all.null.or.Undefined', () => {

    it.each(dataForGoodTesting)('is.all.null.or.Undefined: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.null.or.Undefined(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.null.or.Undefined: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.null.or.Undefined(value)).toBe(false);
    });

});
