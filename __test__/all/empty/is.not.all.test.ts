import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.Empty', () => {

    it.each(dataForBadTesting)('Is.All.Not.Empty: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Empty(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Empty: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Empty(value)).toBe(true);
    });

});
