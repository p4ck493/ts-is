import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.Object', () => {

    it.each(dataForBadTesting)('is.all.not.Object: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Object(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.Object: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Object(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.Object: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.Object(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.object: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.object(value)).toBe(false);
    });

});
