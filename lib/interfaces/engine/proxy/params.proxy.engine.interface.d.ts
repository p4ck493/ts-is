export declare type CommandType = ((...rest: any) => boolean);
export declare type CommandMixType = (CommandType | 'not' | 'or' | 'all' | 'apply' | 'call');
export interface ParamsProxyEngineInterface {
    commandList: CommandMixType[];
}
