import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.Undefined', () => {

    it.each(dataForBadTesting)('is.all.not.Undefined: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Undefined(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.Undefined: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Undefined(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('is.all.not.Undefined: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.Undefined(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.undefined: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.undefined(value)).toBe(false);
    });

});
