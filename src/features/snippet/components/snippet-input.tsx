import { Box, Container, Flex, TextArea, TextField } from '@radix-ui/themes';
import { SubmitButton } from './submit-button';
import { submitSnippet } from '../actions/submit-snippet';
import { SelectLanguage } from './select-language';

export const SnippetInput = () => {
    return (
        <Box height={ '100%' } p={ '3' }>
            <Container size={ '2' }>
                <form action={ submitSnippet } className={ 'flex flex-col flex-1' }>
                    <TextField.Root name={ 'title' } placeholder={ 'Title' } className={ 'w-full mb-4' } size={ '3' } />
                    <TextArea name={ 'text' } size={ { initial: '1', sm: '3' } } className={ 'w-full mb-4 h-80' } />
                    <Flex gap={ '4' } className={ 'transition-all flex-col-reverse sm:flex-row' }>
                        <Flex flexGrow={ '1' }>
                            <SubmitButton>Submit</SubmitButton>
                        </Flex>
                        <SelectLanguage />
                    </Flex>
                </form>
            </Container>
        </Box>
    );
}