import {Is} from "../../../lib";
import {dataForGoodTesting} from './state';


describe('Is.All.Person', () => {

    it.each(dataForGoodTesting)('Is.All.Person: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Person(value)).toBe(true);
    });

});
