export declare type registerInIsArgumentDecoratorType = {
    constructor: {
        name: string;
    };
};
export declare type registerInIsConstructorDecoratorType = new () => registerInIsArgumentDecoratorType;
export declare type registerInIsDecoratorType = (constructor: registerInIsConstructorDecoratorType) => void;
