import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.undefined', () => {

    it.each(dataForGoodTesting)('is.all.undefined: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.undefined(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.undefined: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.undefined(value)).toBe(false);
    });

});
