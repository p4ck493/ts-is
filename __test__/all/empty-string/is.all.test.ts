import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.string.empty', () => {

    it.each(dataForGoodTesting)('is.all.string.empty: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.string.empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.string.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.string.empty(value)).toBe(false);
    });

});
