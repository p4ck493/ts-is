import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.true', () => {

    it.each(dataForBadTesting)('is.all.not.true: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.true(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.true: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.true(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.true: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.true(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.true: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.true(value)).toBe(false);
    });

});
