export type registerInIsArgumentDecoratorType = {
  constructor: {
    name: string;
  };
};

export type registerInIsConstructorDecoratorType = {
  new (): registerInIsArgumentDecoratorType;
  [key: string]: any;
};
