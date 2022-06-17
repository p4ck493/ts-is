import {Is} from "../../../lib";
import {dataForGoodTesting} from './state';


describe('Is.All.BigInt', () => {

    it.each(dataForGoodTesting)('Is.All.BigInt: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.BigInt(value)).toBe(true);
    });

});
