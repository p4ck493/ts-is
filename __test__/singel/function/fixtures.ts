

export const dataForGoodTesting: {value: any}[] = [
    {
        value: Object.keys
    },
    {
        value: Symbol
    },
    {
        value: BigInt
    },
    {
        value: Function
    },
    {
        value: () => {}
    }
];

export const dataForBadTesting: {value: any}[] = [
    {
        value: 'null'
    },
    {
        value: 'undefined'
    },
    {
        value: Symbol()
    },
    {
        value: true
    },
    {
        value: BigInt(1)
    },
    {
        value: []
    },
    {
        value: false
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
        value: {}
    },
    {
        value: 0
    },
    {
        value: undefined
    },
    {
        value: null
    },
    {
        value: NaN
    },
];
