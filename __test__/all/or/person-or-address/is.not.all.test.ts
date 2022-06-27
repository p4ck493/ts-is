import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';
import {Is} from '../../../../lib';


describe('Is.All.Not.Person.Or.Man', () => {

    it.each(dataForBadTesting)('Is.All.Not.Person.Or.Man: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Person.Or.Man(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('Is.All.Not.Person.Or.Man: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Person.Or.Man(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Person.Or.Man: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Person.Or.Man(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Person.Or.Man: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Person.Or.Man(value)).toBe(true);
    });

});
