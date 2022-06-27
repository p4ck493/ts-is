import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Person', () => {

    it.each(dataForGoodTesting)('Is.All.Person: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Person(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.Person: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Person(value)).toBe(false);
    });

});
