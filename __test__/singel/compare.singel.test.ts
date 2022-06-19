import {Is} from '../../lib';


describe('Object singel', () => {

    const dataForGoodTesting: {first: any, second: any}[] = [
        {
            first: {
                a: 1
            },
            second: {
                a: 1
            }
        },
        {
            first: {},
            second: {}
        },
    ];

    const dataForBadTesting: {first: any, second: any}[] = [
        {
            first: {
                a: 2
            },
            second: {
                a: 1
            }
        },
    ];

    it.each(dataForGoodTesting)('Is.Compare: Should true for $first === $second', ({first, second}) => {
        expect(Is.Compare(first, second)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Compare: Should false for $first === $second', ({first, second}) => {
        expect(Is.Compare(first, second)).toBe(false);
    });

    it.each(dataForGoodTesting)('Is.Not.Compare: Should false for $first === $second', ({first, second}) => {
        expect(Is.Not.Compare(first, second)).toBe(false);
    });

    it.each(dataForBadTesting)('Is.Not.Compare: Should true for $first === $second', ({first, second}) => {
        expect(Is.Not.Compare(first, second)).toBe(true);
    });

});
