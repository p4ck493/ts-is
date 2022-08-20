import {is} from '../../../lib';
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.truthy', () => {

    it.each(dataForBadTesting)('is.all.not.truthy: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.truthy(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.truthy: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.truthy(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.truthy: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.truthy(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.truthy: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.truthy(value)).toBe(false);
    });

});
