import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.Person', () => {

    it.each(dataForBadTesting)('Is.All.Not.Person: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Person(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Person: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Person(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('Is.All.Not.Person: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Person(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Person: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Person(value)).toBe(false);
    });

});
