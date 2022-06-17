import {Is} from "../../../lib";
import {dataForGoodTesting} from './state';


describe('Is.All.Undefined', () => {

    it.each(dataForGoodTesting)('Is.All.Undefined: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Undefined(value)).toBe(true);
    });

});
