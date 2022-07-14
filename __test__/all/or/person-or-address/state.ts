import {RegisterInIs} from '../../../../lib/decorators';


@RegisterInIs()
// @ts-ignore
class Person {

}

@RegisterInIs()
// @ts-ignore
class Woman extends Person {

}

@RegisterInIs({
    className: 'Man'
})
// @ts-ignore
class ManModel {

}

@RegisterInIs()
// @ts-ignore
class Address {
}

export const dataForGoodTesting: {value: any[]}[] = [
    {
        value: [new Person()]
    },
    {
        value: [new Person(), [new Woman()]]
    },
    {
        value: [new Person(), [new Woman()], new ManModel()]
    },
    {
        value: [new Person(), new Woman(), new ManModel()]
    },
];

export const dataForBadTesting: {value: any[]}[] = [
    {
        value: [undefined]
    },
    {
        value: [null]
    },
    {
        value: [{}]
    },
    {
        value: [Symbol()]
    },
    {
        value: ['undefined']
    },
    {
        value: [true]
    },
    {
        value: [BigInt(1)]
    },
    {
        value: [false]
    },
    {
        value: [true, false]
    },
    {
        value: [false, true]
    },
    {
        value: ['null']
    },
    {
        value: [""]
    },
    {
        value: ['']
    },
    {
        value: [``]
    },
    {
        value: [0]
    },
    {
        value: [[]]
    },
    {
        value: [Function]
    },
    {
        value: [() => {}]
    },
    {
        value: [BigInt]
    },
    {
        value: [Symbol]
    },
    {
        value: [NaN]
    },
];

export const advancedDataForBadTesting: {value: any[]}[] = dataForBadTesting.map((object: {value: any[]}) => {
    return {
        value: [
            ...(dataForGoodTesting[dataForGoodTesting.length - 1].value),
            ...object.value,
        ]
    };
});
