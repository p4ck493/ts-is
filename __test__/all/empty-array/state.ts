export const dataForGoodTesting: {value: any[]}[] = [
    {
        value: [[]]
    },
];

export const dataForGoodCaseTesting: {value: any[]}[] = [
    {
        value: [['test']]
    },
];

export const dataForBadTesting: {value: any[]}[] = [
    {
        value: [{}]
    },
    {
        value: [{
            property: 1
        }]
    },
    {
        value: [Symbol()]
    },
    {
        value: ['undefined']
    },
    {
        value: [undefined]
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
        value: [null]
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
