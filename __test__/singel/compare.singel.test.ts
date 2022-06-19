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

    it.each(dataForGoodTesting)('Is.Object: Should true for $first === $second', ({first, second}) => {
        expect(Is.Compare(first, second)).toBe(true);
    });

    it.each(dataForBadTesting)('Is.Object: Should false for $first === $second', ({first, second}) => {
        expect(Is.Compare(first, second)).toBe(false);
    });

    // it.each(dataForGoodTesting)('Is.Not.Object: Should false for $value', ({value}) => {
    //     expect(Is.Not.Object(value)).toBe(false);
    // });
    //
    // it.each(dataForBadTesting)('Is.Not.Object: Should true for $value', ({value}) => {
    //     expect(Is.Not.Object(value)).toBe(true);
    // });

});
