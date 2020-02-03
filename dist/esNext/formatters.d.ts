export declare const formatLink: ({ url, label, }: {
    url: string;
    label?: string | undefined;
}) => string;
export declare const formatSnippetText: ({ title, text, newLine, }: {
    title?: string | undefined;
    text: string;
    newLine?: boolean | undefined;
}) => string;
export declare const formatSnippetObject: ({ title, object, newLine, }: {
    title?: string | undefined;
    object: any;
    newLine?: boolean | undefined;
}) => string;
