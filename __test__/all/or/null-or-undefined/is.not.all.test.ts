import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';
import {Is} from '../../../../lib';


describe('Is.All.Not.Null.Or.Undefined', () => {

    it.each(dataForBadTesting)('Is.All.Not.Null.Or.Undefined: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Null.Or.Undefined(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('Is.All.Not.Null.Or.Undefined: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Null.Or.Undefined(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Null.Or.Undefined: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Null.Or.Undefined(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Null.Or.Undefined: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Null.Or.Undefined(value)).toBe(true);
    });

});
