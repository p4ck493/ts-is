import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.Array', () => {

    it.each(dataForBadTesting)('Is.All.Not.Array: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Array(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Array: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Array(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('Is.All.Not.Array: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Array(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Array: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Array(value)).toBe(false);
    });

});
