import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';
import {is} from '../../../../lib';


describe('is.all.not.null.or.undefined', () => {

    it.each(dataForBadTesting)('is.all.not.null.or.undefined: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.null.or.undefined(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('is.all.not.null.or.undefined: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.null.or.undefined(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.null.or.undefined: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.null.or.undefined(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.not.null.or.undefined: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.null.or.undefined(value)).toBe(false);
    });

});
