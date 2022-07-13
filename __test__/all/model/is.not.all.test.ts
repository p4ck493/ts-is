import {is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('is.all.not.Person', () => {

    it.each(dataForBadTesting)('is.all.not.Person: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Person(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('is.all.not.Person: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Person(value)).toBe(true);
    });


    it.each(dataForGoodTesting)('is.all.not.Person: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.Person(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.Person: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.Person(value)).toBe(false);
    });

});
