import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.EmptyArray', () => {

    it.each(dataForBadTesting)('Is.All.Not.EmptyArray: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.EmptyArray(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.EmptyArray: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.EmptyArray(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('Is.All.Not.EmptyArray: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.EmptyArray(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.EmptyArray: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.EmptyArray(value)).toBe(false);
    });

});
