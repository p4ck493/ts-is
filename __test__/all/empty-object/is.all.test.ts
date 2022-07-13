import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.object.empty', () => {

    it.each(dataForGoodTesting)('is.all.object.empty: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.object.empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.object.empty: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.object.empty(value)).toBe(false);
    });

});
