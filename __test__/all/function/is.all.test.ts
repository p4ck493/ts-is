import {Is} from "../../../lib";
import {dataForGoodTesting} from './state';


describe('Is.All.Function', () => {

    it.each(dataForGoodTesting)('Is.All.Function: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Function(value)).toBe(true);
    });

});
