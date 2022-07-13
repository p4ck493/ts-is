import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';
import {is} from '../../../../lib';


describe('is.all.not.Null.or.Undefined', () => {

    it.each(dataForBadTesting)('is.all.not.Null.or.Undefined: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Null.or.Undefined(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('is.all.not.Null.or.Undefined: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.Null.or.Undefined(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.null.or.Undefined: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.null.or.Undefined(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.not.Null.or.Undefined: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Null.or.Undefined(value)).toBe(true);
    });

});
