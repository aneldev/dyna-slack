export interface IDynaSlackConfig {
    channels: {
        [channelName: string]: ISlackConnectionChannel;
    };
}
export interface ISlackConnectionChannel {
    webhookUrl: string;
}
export declare class DynaSlack {
    private readonly config;
    private slackChannels;
    constructor(config: IDynaSlackConfig);
    post({ channelName, username, message, }: {
        channelName: string;
        username: string;
        message: string;
    }): Promise<void>;
}
