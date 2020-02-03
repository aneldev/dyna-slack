"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLink = function (_a) {
    var url = _a.url, label = _a.label;
    return "<" + url + "|" + (label || "") + ">";
};
exports.formatSnippetText = function (_a) {
    var title = _a.title, text = _a.text, newLine = _a.newLine;
    return [
        title && "\n*" + title + "*\n",
        newLine && "\n\`\`\`\n" || "\`",
        text,
        newLine && "\n\`\`\`\n" || "\`",
    ].filter(Boolean).join('');
};
exports.formatSnippetObject = function (_a) {
    var title = _a.title, object = _a.object, newLine = _a.newLine;
    return exports.formatSnippetText({
        title: title,
        text: JSON.stringify(object, null, 2),
        newLine: newLine,
    });
};
//# sourceMappingURL=formatters.js.map