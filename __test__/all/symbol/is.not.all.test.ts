import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.Symbol', () => {

    it.each(dataForBadTesting)('is.all.not.Symbol: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Symbol(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.Symbol: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Symbol(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.Symbol: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.Symbol(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.symbol: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.symbol(value)).toBe(false);
    });

});
