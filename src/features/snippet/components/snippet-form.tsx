import { Box, Container, Flex, TextArea, TextField } from '@radix-ui/themes';
import { submitSnippet } from '@/features/snippet/actions/submit-snippet';
import { SubmitButton } from '@/features/snippet/components/submit-button';
import { SelectLanguage } from '@/features/snippet/components/select-language';
import { SnippetSettings } from '@/features/snippet/components/snippet-settings';

export const SnippetForm = () => {

    return (
        <Box className={ 'w-full' }>
            <Container size={ '3' }>
                <form action={ submitSnippet } className={ 'flex gap-4 flex-col' }>
                    <Flex gap={ '4' } className={ 'flex-col sm:flex-row' }>
                        <TextField.Root name={ 'title' } placeholder={ 'Title' } className={ 'w-full' } size={ '3' } autoComplete='off'/>
                        <SelectLanguage />
                    </Flex>
                    <TextArea name={ 'text' } size={ '3' } rows={ 15 } />
                    <Flex gap={ '4' } className={ 'flex-col sm:flex-row ' }>
                        <SnippetSettings />
                        <SubmitButton>Submit</SubmitButton>
                    </Flex>
                </form>
            </Container>
        </Box>
    );
}