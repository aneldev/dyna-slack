export var formatLink = function (_a) {
    var url = _a.url, label = _a.label;
    return "<" + url + "|" + (label || "") + ">";
};
export var formatSnippetText = function (_a) {
    var title = _a.title, text = _a.text, newLine = _a.newLine;
    return [
        title && "\n*" + title + "*\n",
        newLine && "\n\`\`\`\n" || "\`",
        text,
        newLine && "\n\`\`\`\n" || "\`",
    ].filter(Boolean).join('');
};
export var formatSnippetObject = function (_a) {
    var title = _a.title, object = _a.object, newLine = _a.newLine;
    return formatSnippetText({
        title: title,
        text: JSON.stringify(object, null, 2),
        newLine: newLine,
    });
};
//# sourceMappingURL=formatters.js.map