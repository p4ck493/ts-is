import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.symbol', () => {

    it.each(dataForBadTesting)('is.all.not.symbol: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.symbol(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.symbol: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.symbol(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.symbol: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.symbol(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.symbol: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.symbol(value)).toBe(false);
    });

});
