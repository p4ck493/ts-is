import {Is} from "../../../lib";
import {dataForGoodTesting} from './state';


describe('Is.All.False', () => {

    it.each(dataForGoodTesting)('Is.All.False: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.False(value)).toBe(true);
    });

});
