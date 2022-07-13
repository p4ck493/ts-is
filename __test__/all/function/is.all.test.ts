import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.function', () => {

    it.each(dataForGoodTesting)('is.all.function: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.function(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.function: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.function(value)).toBe(false);
    });

});
