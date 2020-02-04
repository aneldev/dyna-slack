# Dyna Slack

Simplifies the way to post a message on Slack Channel as a bot.

Written in Typescript. Working in Node.

# Example

## Simple

```
import {
    DynaSlack,
    formatLink,
    formatSnippetText,
    formatSnippetObject,
} from "dyna-slack";

const dynaSlack = new DynaSlack({
  channels: {
    "my-app-fire": {
      webhookUrl: "https://hooks.slack.com/services/xxxxxxxx/YOUR_API_KEY",
    }
  }
});

dynaSlack.post({
    clannelName: "my-app-fire",
    message: "Hello there"
})
    .catch(console.error);

```

## With formatters

Formatters are few functions that apply the Slack's markup for you.

```
import {
    DynaSlack,
    formatLink,
    formatSnippetText,
    formatSnippetObject,
} from "dyna-slack";

const dynaSlack = new DynaSlack({
  channels: {
    "my-app-fire": {
      webhookUrl: "https://hooks.slack.com/services/xxxxxxxx/YOUR_API_KEY",
    }
  }
});

dynaSlack.post({
    clannelName: "my-app-fire",
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
    .catch(console.error);

```

# Methods

## Post

```
post({
    channelName: string;
    username: string;
    message: string;
}): Promise<void>;
```

# Formatters

## formatLink

To create a link.

```
formatLink = (
  {
    url,
    label,
  }: {
    url: string;
    label?: string;
  }
): string
```

## formatSnippetText

To create a snippet.

```
formatSnippetText = (
  {
    title,
    text,
    newLine,
  }: {
    title?: string;
    text: string;
    newLine?: boolean; // default is false
  }
): string 
```

## formatSnippetObject

Stringifies an object and formats it as a snippet.

```
formatSnippetObject = (
  {
    title,
    object,
    newLine,
  }: {
    title?: string;
    object: any;
    newLine?: boolean; // default is false
  }
): string
```
