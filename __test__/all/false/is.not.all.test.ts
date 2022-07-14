import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.false', () => {

    it.each(dataForBadTesting)('is.all.not.false: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.false(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.false: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.false(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.false: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.false(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.false: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.false(value)).toBe(false);
    });

});
