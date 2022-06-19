import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.Person', () => {

    it.each(dataForBadTesting)('Is.All.Not.Person: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Person(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Person: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Person(value)).toBe(true);
    });

});
