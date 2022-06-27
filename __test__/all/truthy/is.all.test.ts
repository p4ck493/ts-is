import {Is} from "../../../lib";
import {dataForGoodTesting} from './state';


describe('Is.All.Truthy', () => {

    it.each(dataForGoodTesting)('Is.All.Truthy: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Truthy(value)).toBe(true);
    });

});
