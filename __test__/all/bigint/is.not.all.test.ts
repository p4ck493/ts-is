import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting} from './state';


describe('Is.All.Not.BigInt', () => {

    it.each(dataForBadTesting)('Is.All.Not.BigInt: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.BigInt(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.BigInt: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.BigInt(value)).toBe(true);
    });

});
