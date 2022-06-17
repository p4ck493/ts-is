export const dataForGoodTesting: {value: any[]}[] = [
    {
        value: [true]
    },
];

export const dataForBadTesting: {value: any[]}[] = [
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
        value: ['undefined']
    },
    {
        value: ['null']
    },
    {
        value: [Symbol()]
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
        value: [{}]
    },
    {
        value: [0]
    },
    {
        value: [null]
    },
    {
        value: [undefined]
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
