import {is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.Person', () => {

    it.each(dataForGoodTesting)('is.all.Person: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.Person(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.Person: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.Person(value)).toBe(false);
    });

});
