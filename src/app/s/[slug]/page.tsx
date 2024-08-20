import { Announcement } from '@/components/shared/announcement';
import { getSnippet } from '@/features/snippet/actions/get-snippet'
import { SnippetView } from '@/features/snippet/components/snippet-view';
import { Box } from '@radix-ui/themes';
import { codeToHtml } from 'shiki';

export default async function Page ( { params }: { params: { slug: string } } ) {

    const data = await getSnippet(params.slug)

    const highlightSnippet = await codeToHtml(data?.text || 'Nothing', {
        lang: data?.language || 'text',
        theme: 'dracula',
    });

    return (
        <Box className={ 'p-4' }>
            <Announcement />
            { data && <SnippetView title={ data.title } text={ data.text } formattedText={ highlightSnippet } language={ data.language } /> }
        </Box>
    )
    
}