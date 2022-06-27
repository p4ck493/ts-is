import {Is} from "../../../lib";
import {advancedDataForBadTesting, dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Not.BigInt', () => {

    it.each(dataForBadTesting)('Is.All.Not.BigInt: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.BigInt(value)).toBe(true);
    });

    it.each(advancedDataForBadTesting)('Is.All.Not.BigInt: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.BigInt(value)).toBe(true);
    });

    it.each(dataForGoodTesting)('Is.All.Not.BigInt: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Not.BigInt(value)).toBe(false);
    });

    it.each(advancedDataForBadTesting)('Is.All.BigInt: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.BigInt(value)).toBe(false);
    });

});
