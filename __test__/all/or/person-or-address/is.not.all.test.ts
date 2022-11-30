import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';
import {is} from '../../../../lib';


describe('is.all.not.Person.or.Man', () => {

    it.each(dataForBadTesting)('is.all.not.Person.or.Man: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.not.Person.or.Man(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('is.all.not.Person.or.Man: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.Person.or.Man(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.Person.or.Man: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.Person.or.Man(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('is.all.not.Person.or.Man: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.not.Person.or.Man(value)).toBe(false);
    });

});
