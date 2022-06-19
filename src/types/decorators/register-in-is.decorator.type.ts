export type registerInIsArgumentDecoratorType = {
  constructor: {
    name: string;
  };
};

export type registerInIsConstructorDecoratorType = new () => registerInIsArgumentDecoratorType;

export type registerInIsDecoratorType = (constructor: registerInIsConstructorDecoratorType) => void;
