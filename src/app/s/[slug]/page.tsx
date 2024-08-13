import { getSnippet } from '@/features/snippet/actions/get-snippet'
import { SnippetView } from '@/features/snippet/components/snippet-view';
import { codeToHtml } from 'shiki';

export default async ( { params }: { params: { slug: string } } ) => {

    const data = await getSnippet(params.slug)

    const highlightSnippet = await codeToHtml(data?.text || 'Nothing', {
        lang: data?.language || 'text',
        theme: 'dracula',
    });

    return (
        <>
            { data && <SnippetView title={ data.title } text={ highlightSnippet } language={ data.language } /> }
        </>
    )
    
}