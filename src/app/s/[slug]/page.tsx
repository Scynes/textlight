import { getSnippet } from '@/features/snippet/actions/get-snippet'
import { SnippetView } from '@/features/snippet/components/snippet-view';

export default async ( { params }: { params: { slug: string } } ) => {

    const data = await getSnippet(params.slug)

    console.log(data);

    return (
        <>
            { data && <SnippetView text={ data.text } language={ data.language } /> }
        </>
    )
    
}