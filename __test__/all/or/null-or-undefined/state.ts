export const dataForGoodTesting: {value: any[]}[] = [
    {
        value: [undefined]
    },
    {
        value: [null]
    },
];

export const dataForBadTesting: {value: any[]}[] = [
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
