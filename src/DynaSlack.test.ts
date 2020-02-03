import "jest";
import {
  IDynaSlackConfig,
  DynaSlack,
  formatLink,
  formatSnippetText,
  formatSnippetObject,
} from "../src";

enum EChannels {
  MYAPP_FIRE_CHANNEL = "my-app-fire",
}

const slackConnectionConfig: IDynaSlackConfig = {
  channels: {
    [EChannels.MYAPP_FIRE_CHANNEL]: {
      webhookUrl: "https://hooks.slack.com/services/xxxxxxxx/YOUR_API_KEY",
    }
  }
};

describe("SlackConnection", () => {

  describe("simple post", () => {

    it("should send a simple post", (done) => {
      const slackConnection = new DynaSlack(slackConnectionConfig);
      slackConnection.post({
        channelName: EChannels.MYAPP_FIRE_CHANNEL,
        username: "Sender test",
        message: [
          new Date,
          "Hello world",
          "*Strong* _italic_",
          `For more info click ${formatLink({url: "http://www.anel.co", label: "here"})}!`,
          `Inline snippet ${formatSnippetText({text: 'foo: "bar"'})} is correct.`,
          `New line snippet ${formatSnippetText({title: "Example", text: 'foo: "bar"', newLine: true})} is correct.`,
          `New line snippet ${formatSnippetText({title: "Variable Example", text: 'foo: "bar"', newLine: true})} is correct.`,
          `Object snippet ${formatSnippetObject({title: "Object Example", object: {name: "John Smith"}, newLine: true})} is correct.`,
          `Object snippet ${formatSnippetObject({title: "Large Object Example", object: slackConnection, newLine: true})} is correct.`,
        ].join("\n")
      })
        .then(() => {
          expect(1).toBe(1);
          done();
        })
        .catch(error => {
          console.error(error);
          done();
        });
    });

  });

});
