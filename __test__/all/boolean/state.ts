export const dataForGoodTesting: {value: any[]}[] = [
    {
        value: [true]
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
];

export const dataForBadTesting: {value: any[]}[] = [
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
        value: [BigInt(1)]
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
