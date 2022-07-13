import {dataForBadTesting, dataForGoodTesting} from './state';
import {is} from '../../../../lib';


describe('is.all.null.or.undefined', () => {

    it.each(dataForGoodTesting)('is.all.null.or.undefined: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.null.or.undefined(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.null.or.undefined: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.null.or.undefined(value)).toBe(false);
    });

});
