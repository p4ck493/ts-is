import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.False', () => {

    it.each(dataForBadTesting)('Is.All.Not.False: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.False(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.False: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.False(value)).toBe(true);
    });

});
