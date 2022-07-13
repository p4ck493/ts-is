import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.symbol', () => {

    it.each(dataForGoodTesting)('is.all.symbol: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.symbol(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.symbol: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.symbol(value)).toBe(false);
    });

});
