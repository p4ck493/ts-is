import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.EmptyObject', () => {

    it.each(dataForBadTesting)('Is.All.Not.EmptyObject: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.EmptyObject(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.EmptyObject: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.EmptyObject(value)).toBe(true);
    });

});
