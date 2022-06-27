import {dataForBadTesting, dataForGoodTesting} from './state';
import {Is} from '../../../../lib';


describe('Is.All.Null.Or.Undefined', () => {

    it.each(dataForGoodTesting)('Is.All.Null.Or.Undefined: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Null.Or.Undefined(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.Null.Or.Undefined: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Null.Or.Undefined(value)).toBe(false);
    });

});
