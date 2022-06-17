import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.True', () => {

    it.each(dataForBadTesting)('Is.All.Not.True: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.True(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.True: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.True(value)).toBe(true);
    });

});
