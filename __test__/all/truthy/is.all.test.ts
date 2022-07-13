import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.truthy', () => {

    it.each(dataForGoodTesting)('is.all.truthy: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.truthy(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.truthy: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.truthy(value)).toBe(false);
    });

});
