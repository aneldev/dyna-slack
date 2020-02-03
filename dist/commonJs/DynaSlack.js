"use strict";
// help: https://www.npmjs.com/package/slack-node
Object.defineProperty(exports, "__esModule", { value: true });
var Slack = require("slack-node");
var DynaSlack = /** @class */ (function () {
    function DynaSlack(config) {
        var _this = this;
        this.config = config;
        this.slackChannels = {};
        Object.keys(config.channels)
            .forEach(function (channelName) {
            _this.slackChannels[channelName] = new Slack();
            _this.slackChannels[channelName].setWebhook(config.channels[channelName].webhookUrl);
        });
    }
    DynaSlack.prototype.post = function (_a) {
        var channelName = _a.channelName, username = _a.username, message = _a.message;
        var slackChannel = this.slackChannels[channelName];
        if (!slackChannel)
            return Promise.reject({
                code: 1907121010,
                message: "Channel [" + channelName + "] is not defined in the config"
            });
        return new Promise(function (resolve, reject) {
            slackChannel.webhook({
                channel: channelName,
                username: username,
                text: message,
            }, function (err, response) {
                if (err) {
                    reject({
                        code: 1907121013,
                        message: "Cannot send post",
                        error: err,
                    });
                }
                else {
                    if (response.statusCode === 200) {
                        resolve();
                    }
                    else {
                        reject({
                            code: response.statusCode,
                            message: "Server responded error",
                            data: { response: response },
                        });
                    }
                }
            });
        });
    };
    return DynaSlack;
}());
exports.DynaSlack = DynaSlack;
//# sourceMappingURL=DynaSlack.js.map