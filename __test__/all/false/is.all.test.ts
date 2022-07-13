import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.false', () => {

    it.each(dataForGoodTesting)('is.all.false: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.false(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.false: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.false(value)).toBe(false);
    });

});
