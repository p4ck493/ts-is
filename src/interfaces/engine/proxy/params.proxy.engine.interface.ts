export type CommandType = ((...rest: any) => boolean);
export type CommandMixType = (CommandType | 'not' | 'or' | 'apply' | 'call');
export interface ParamsProxyEngineInterface {
    commandList: CommandMixType[]
}
