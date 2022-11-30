import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.undefined', () => {

    it.each(dataForBadTesting)('is.all.not.undefined: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.undefined(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.undefined: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.undefined(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.all.not.undefined: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.undefined(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.undefined: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.undefined(value)).toBe(false);
    });

});
