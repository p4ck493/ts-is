import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Function', () => {

    it.each(dataForGoodTesting)('Is.All.Function: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Function(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.Function: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Function(value)).toBe(false);
    });

});
