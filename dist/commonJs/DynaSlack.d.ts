export interface IDynaSlackConfig {
    channels: {
        [channelName: string]: ISlackConnectionChannel;
    };
}
export interface ISlackConnectionChannel {
    webhookUrl: string;
}
export interface IPost {
    channelName: string;
    username: string;
    message: string;
}
export declare class DynaSlack {
    private readonly config;
    private slackChannels;
    constructor(config: IDynaSlackConfig);
    post({ channelName, username, message, }: IPost): Promise<void>;
}
