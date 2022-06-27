import { proxyRecursive } from '../recursive';

type proxyGeneratorGetType = (target: object, name: string) => ReturnType<typeof proxyRecursive>;

export function proxyGeneratorGet(): proxyGeneratorGetType {
  return (target, name) => {
    // TODO add proxy on flags and handle on set, change status of action when changed the value
    return proxyRecursive(
      target,
      name,
      {
        AfterWrapper: false,
        BeforeWrapper: false,
        Method: false,
        ModelWrapper: false,
        ConnectionWrapper: false,
      },
      {
        beforeWrapper: [],
        afterWrapper: [],
        connectionWrapper: [],
        methods: [],
        models: [],
      },
    );
  };
}
