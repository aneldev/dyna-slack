export const formatLink = (
  {
    url,
    label,
  }: {
    url: string;
    label?: string;
  }
): string => {
  return `<${url}|${label || ""}>`;
};

export const formatSnippetText = (
  {
    title,
    text,
    newLine,
  }: {
    title?: string;
    text: string;
    newLine?: boolean; // default is false
  }
): string => {
  return [
    title && `\n*${title}*\n`,
    newLine && "\n\`\`\`\n" || "\`",
    text,
    newLine && "\n\`\`\`\n" || "\`",
  ].filter(Boolean).join('');
};

export const formatSnippetObject = (
  {
    title,
    object,
    newLine,
  }: {
    title?: string;
    object: any;
    newLine?: boolean; // default is false
  }
): string => {
  return formatSnippetText({
    title,
    text: JSON.stringify(object, null, 2),
    newLine,
  });
};
