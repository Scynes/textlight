import { Box, Container } from '@radix-ui/themes';
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
        theme: 'dracula',
    });

    return (
        <Container size={ '3' }>
            <Box className={ 'w-auto' } dangerouslySetInnerHTML={{ __html: HIGHLIGHT_SNIPPET }} />
        </Container>
    )
}