import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.boolean', () => {

    it.each(dataForGoodTesting)('is.all.boolean: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.boolean(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.boolean: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.boolean(value)).toBe(false);
    });

});
