import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.true', () => {

    it.each(dataForGoodTesting)('is.all.true: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.true(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.true: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.true(value)).toBe(false);
    });

});
