import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.falsy', () => {

    it.each(dataForBadTesting)('is.all.not.falsy: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.falsy(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.falsy: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.falsy(value)).toBe(false);
    });


    it.each(dataForGoodTesting)('is.all.not.falsy: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.falsy(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.falsy: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.falsy(value)).toBe(false);
    });

});
