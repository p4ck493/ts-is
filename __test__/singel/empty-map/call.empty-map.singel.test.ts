import {is} from '../../../dist';


describe('Empty Map singel: call', () => {

    const dataForGoodTesting: {value: any}[] = [
        {
            value: new Map()
        },
    ];

    const dataForBadTesting: {value: any}[] = [
        {
            value: new Map([['key', 'value']])
        },
    ];

    it.each(dataForGoodTesting)('is.Map.empty: Should true for $value', ({value}) => {
        expect(is.Map.empty.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.Map.empty: Should false for $value', ({value}) => {
        expect(is.Map.empty.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('is.Map.not.empty: Should false for $value', ({value}) => {
        expect(is.Map.not.empty.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('is.Map.not.empty: Should false for $value', ({value}) => {
        expect(is.Map.not.empty.call({}, value)).toBe(true);
    });

});
