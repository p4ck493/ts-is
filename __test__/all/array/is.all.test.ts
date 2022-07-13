import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.array', () => {

    it.each(dataForGoodTesting)('is.all.array: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.array(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.array: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.array(value)).toBe(false);
    });

});
