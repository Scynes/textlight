import { Box } from '@radix-ui/themes';
import { codeToHtml } from 'shiki'

interface Properties {
    // The text snippet to display
    text: string;
    // The (text) language of the snippet
    language: string;
}

export const SnippetView = async ( { text, language }: Properties ) => {

    const HIGHLIGHT_SNIPPET = await codeToHtml(text, {
        lang: language,
        theme: 'dark-plus'
    });

    return (
        <Box className={ 'w-auto' } dangerouslySetInnerHTML={{ __html: HIGHLIGHT_SNIPPET }} />
    )
}