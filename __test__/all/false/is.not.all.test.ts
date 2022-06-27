import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.False', () => {

    it.each(dataForBadTesting)('Is.All.Not.False: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.False(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.False: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.False(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('Is.All.Not.False: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.False(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.False: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.False(value)).toBe(false);
    });

});
