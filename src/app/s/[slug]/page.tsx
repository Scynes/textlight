import { Announcement } from '@/components/shared/announcement';
import { getSnippet } from '@/features/snippet/actions/get-snippet'
import { SnippetView } from '@/features/snippet/components/snippet-view';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { codeToHtml } from 'shiki';

export default async function Page ( { params }: { params: { slug: string } } ) {

    const data = await getSnippet(params.slug)

    const highlightSnippet = await codeToHtml(data?.text || 'Nothing', {
        lang: data?.language || 'text',
        theme: 'synthwave-84',
    });

    return (
        <Box className={ 'p-4 min-h-full h-full' }>
            <Announcement />
            { data 
                ? 
                    <SnippetView title={ data.title } text={ data.text } date={ data.created_at } formattedText={ highlightSnippet } language={ data.language } /> 
                :
                    <Flex gap={ '4' } className={ 'h-full' } justify={ 'center' } align={ 'center' } direction={ 'column' }>
                        <Heading size={ { initial: '8', sm: '9' } } className={ 'font-bold' }>Snippet Not Found</Heading>
                        <Text align={ 'center' }>The snippet you are looking for does not exist or has expired.</Text>
                    </Flex>
            }
        </Box>
    )
    
}