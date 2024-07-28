
'use client';

import { useEffect } from 'react';

import hljs from "highlight.js";

interface Properties {
    // The text snippet to display
    snippet: string;
    // The (text) language of the snippet
    language: string;
}

export const SnippetView = ( { snippet, language }: Properties ) => {

    useEffect(() => hljs.highlightAll(), []);

    return (
        <div>
            <pre>
                <code className={ `language-${ language }` }>
                    { snippet }
                </code>
            </pre>
        </div>
    )
}