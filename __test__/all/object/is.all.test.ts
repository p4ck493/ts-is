import {Is} from "../../../lib";
import {dataForGoodTesting} from './state';


describe('Is.All.Object', () => {

    it.each(dataForGoodTesting)('Is.All.Object: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Object(value)).toBe(true);
    });

});
