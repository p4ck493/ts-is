import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.empty', () => {

    it.each(dataForGoodTesting)('is.all.empty: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.empty(value)).toBe(false);
    });

});
