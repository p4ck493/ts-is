import {Is} from "../../../lib";
import {dataForBadTesting, dataForGoodTesting} from './state';


describe('Is.All.Truthy', () => {

    it.each(dataForGoodTesting)('Is.All.Truthy: Should true for $value', ({value}: {value: any}) => {
        expect(Is.All.Truthy(value)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.All.Truthy: Should false for $value', ({value}: {value: any}) => {
        expect(Is.All.Truthy(value)).toBe(false);
    });

});
