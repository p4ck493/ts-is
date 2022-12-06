

export const dataForGoodTesting: {value: any}[] = [
    {
        value: new RegExp(''),
    },
];

export const dataForBadTesting: {value: any}[] = [
    {
        value: new TypeError(),
    },
    {
        value: new SyntaxError(),
    },
    {
        value: new ReferenceError(),
    },
    {
        value: new Error(),
    },
    {
        value: new EvalError(),
    },
    {
        value: new Date(),
    },
    {
        value: [],
    },
    {
        value: [0,1,3],
    },
    {
        value: ['0','1','3'],
    },
    {
        value: [true, false],
    },
    {
        value: [NaN],
    },
    {
        value: [{}],
    },
    {
        value: [true, false, 0, 'string', {}, NaN],
    },
    {
        value: 'undefined'
    },
    {
        value: 'null'
    },
    {
        value: Symbol()
    },
    {
        value: true
    },
    {
        value: false
    },
    {
        value: BigInt(1)
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
    {
        value: NaN
    },
];1
