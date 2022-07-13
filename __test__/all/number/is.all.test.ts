import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.number', () => {

    it.each(dataForGoodTesting)('is.all.number: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.number(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.number: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.number(value)).toBe(false);
    });

});
