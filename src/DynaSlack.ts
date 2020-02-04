// help: https://www.npmjs.com/package/slack-node

import * as Slack from "slack-node";
import {IError} from "dyna-interfaces";

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

export class DynaSlack {
  private slackChannels: {
    [channelName: string]: Slack;
  } = {};

  constructor(private readonly config: IDynaSlackConfig) {
    Object.keys(config.channels)
      .forEach(channelName => {
        this.slackChannels[channelName] = new Slack();
        this.slackChannels[channelName].setWebhook(config.channels[channelName].webhookUrl);
      });
  }

  public post(
    {
      channelName,
      username,
      message,
    }: IPost,
  ): Promise<void> {
    const slackChannel = this.slackChannels[channelName];

    if (!slackChannel) return Promise.reject({
      code: 1907121010,
      message: `Channel [${channelName}] is not defined in the config`
    } as IError);

    return new Promise<void>((resolve: () => void, reject: (error: IError) => void) => {
      slackChannel.webhook({
        channel: channelName,
        username,
        text: message,
      }, function (err, response) {
        if (err) {
          reject({
            code: 1907121013,
            message: "Cannot send post",
            error: err,
          } as IError);
        }
        else {
          if (response.statusCode === 200) {
            resolve();
          }
          else {
            reject({
              code: response.statusCode,
              message: "Server responded error",
              data: { response },
            } as IError);
          }
        }
      });
    });
  }
}
