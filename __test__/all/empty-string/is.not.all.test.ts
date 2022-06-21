import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.EmptyString', () => {

    it.each(dataForBadTesting)('Is.All.Not.EmptyString: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.EmptyString(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.EmptyString: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.EmptyString(value)).toBe(true);
    });

});
