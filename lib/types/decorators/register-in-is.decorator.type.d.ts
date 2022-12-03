export declare type registerInIsArgumentDecoratorType = {
    constructor: {
        name: string;
    };
};
export declare type registerInIsConstructorDecoratorType = {
    new (): registerInIsArgumentDecoratorType;
    [key: string]: any;
};
