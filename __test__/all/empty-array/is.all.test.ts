import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.array.empty', () => {

    it.each(dataForGoodTesting)('is.all.array.empty: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.array.empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.array.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.array.empty(value)).toBe(false);
    });

});
