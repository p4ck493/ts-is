import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.string', () => {

    it.each(dataForGoodTesting)('is.all.string: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.string(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.string: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.string(value)).toBe(false);
    });

});
