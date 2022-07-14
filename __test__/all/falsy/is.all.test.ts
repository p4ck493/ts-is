import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.false', () => {

    it.each(dataForGoodTesting)('is.all.falsy: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.falsy(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.falsy: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.falsy(value)).toBe(false);
    });

});
