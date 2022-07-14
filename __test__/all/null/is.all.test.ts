import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.null', () => {

    it.each(dataForGoodTesting)('is.all.null: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.null(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.null: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.null(value)).toBe(false);
    });

});
