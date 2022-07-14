import {dataForBadTesting, dataForGoodTesting} from './state';
import {is} from '../../../../lib';


describe('is.all.Person.or.Man', () => {

    it.each(dataForGoodTesting)('is.all.Person.or.Man: Should true for $value', ({value}: {value: any}) => {
        expect(is.all.Person.or.Man(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.all.Person.or.Man: Should false for $value', ({value}: {value: any}) => {
        expect(is.all.Person.or.Man(value)).toBe(false);
    });

});
