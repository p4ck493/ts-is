import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.BigInt', () => {

    it.each(dataForGoodTesting)('Is.All.BigInt: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.BigInt(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.BigInt: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.BigInt(value)).toBe(false);
    });

});
