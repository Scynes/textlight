import { Announcement } from '@/components/shared/announcement';
import { SnippetForm } from '@/features/snippet/components/snippet-form';
import { Box, Flex } from '@radix-ui/themes';

export default function Page () {
    return (
        <Box className={ 'mt-4 px-4' }>
            <Announcement />
            <Box className={ 'mt-4' }>
                <SnippetForm />
            </Box>
        </Box>
    )
}