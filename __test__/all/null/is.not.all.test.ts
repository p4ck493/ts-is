import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.Null', () => {

    it.each(dataForBadTesting)('Is.All.Not.Null: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Null(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.Null: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.Null(value)).toBe(true);
    });

});
