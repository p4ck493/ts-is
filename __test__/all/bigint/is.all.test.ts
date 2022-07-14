import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.bigInt', () => {

    it.each(dataForGoodTesting)('is.all.bigInt: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.bigInt(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.bigInt: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.bigInt(value)).toBe(false);
    });

});
