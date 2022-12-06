

export const dataForGoodTesting: {value: any}[] = [
    {
        value: []
    },
];

export const dataForBadTesting: {value: any}[] = [
    {
        value: {}
    },
    {
        value: {
            property: 1
        }
    },
    {
        value: null
    },
    {
        value: ""
    },
    {
        value: ''
    },
    {
        value: ``
    },
    {
        value: Symbol()
    },
    {
        value: NaN
    },
    {
        value: 'undefined'
    },
    {
        value: 'null'
    },
    {
        value: true
    },
    {
        value: BigInt(1)
    },
    {
        value: false
    },
    {
        value: 0
    },
    {
        value: null
    },
    {
        value: undefined
    },
    {
        value: Function
    },
    {
        value: () => {}
    },
    {
        value: BigInt
    },
    {
        value: Symbol
    },
];

export const dataForGoodCaseTesting: {value: any}[] = [
    {
        value: ['test']
    },
    {
        value: [1]
    },
    {
        value: [[]]
    },
    {
        value: [{}]
    },
];
