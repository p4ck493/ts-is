import {Is} from "../../../lib";
import {dataForGoodTesting} from './state';


describe('Is.All.Boolean', () => {

    it.each(dataForGoodTesting)('Is.All.Boolean: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Boolean(value)).toBe(true);
    });

});
