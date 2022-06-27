import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.String', () => {

    it.each(dataForGoodTesting)('Is.All.String: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.String(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.String: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.String(value)).toBe(false);
    });

});
