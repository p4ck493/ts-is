import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.BigInt', () => {

    it.each(dataForGoodTesting)('is.all.BigInt: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.BigInt(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.BigInt: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.BigInt(value)).toBe(false);
    });

});
