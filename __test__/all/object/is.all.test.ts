import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.object', () => {

    it.each(dataForGoodTesting)('is.all.object: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.object(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.object: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.object(value)).toBe(false);
    });

});
