import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.True', () => {

    it.each(dataForBadTesting)('is.all.not.True: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.True(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.True: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.True(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.True: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.True(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.true: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.true(value)).toBe(false);
    });

});
