export declare type registerInIsArgumentDecoratorType = {
    constructor: {
        name: string;
    };
};
export declare type registerInIsConstructorDecoratorType = {
    new (): registerInIsArgumentDecoratorType;
    [key: string]: any;
};
export declare type registerInIsDecoratorType = (constructor: registerInIsConstructorDecoratorType) => void;
