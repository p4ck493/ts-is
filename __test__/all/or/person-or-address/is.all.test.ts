import {dataForBadTesting, dataForGoodTesting} from './state';
import {Is} from '../../../../lib';


describe('Is.All.Person.Or.Man', () => {

    it.each(dataForGoodTesting)('Is.All.Person.Or.Man: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Person.Or.Man(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.Person.Or.Man: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Person.Or.Man(value)).toBe(false);
    });

});
