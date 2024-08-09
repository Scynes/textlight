import { Box, Container, Flex, TextArea, TextField } from '@radix-ui/themes';
import { SubmitButton } from './submit-button';
import { submitSnippet } from '../actions/submit-snippet';
import { SelectLanguage } from './select-language';
import { SnippetEditCode } from './snippet-edit-code';

export const SnippetInput = () => {
    return (
        <Box height={ '100%' } p={ '3' }>
            <Container size={ '2' }>
                <form action={ submitSnippet } className={ 'flex flex-col flex-1 gap-4' }>
                    <Flex gap={ '4' } className={ 'flex-col sm:flex-row' }>
                        <TextField.Root name={ 'title' } placeholder={ 'Title' } className={ 'w-full' } size={ '3' } />
                        <SelectLanguage />
                    </Flex>
                    <TextArea name={ 'text' } size={ { initial: '1', sm: '3' } } className={ 'w-full h-80' } />
                    <Flex gap={ '4' } className={ 'transition-all flex-col-reverse sm:flex-row' }>
                        <Flex flexGrow={ '1' }>
                            <SubmitButton>Submit</SubmitButton>
                        </Flex>
                        <SnippetEditCode />
                    </Flex>
                </form>
            </Container>
        </Box>
    );
}