import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.function', () => {

    it.each(dataForBadTesting)('is.all.not.function: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.function(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.function: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.function(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.function: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.function(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.function: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.function(value)).toBe(false);
    });

});
