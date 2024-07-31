import { Container, Flex, TextArea } from '@radix-ui/themes';
import { SubmitButton } from './submit-button';
import { submitSnippet } from '../actions/submit-snippet';
import { SelectLanguage } from './select-language';

export const SnippetInput = () => {
    return (
        <Container size={ '2' }>
            <form action={ submitSnippet } className={ 'h-full' }>
                <TextArea name={ 'text' } size={ '3' } className={ 'w-full mb-4' }/>
                <Flex gap={ '3' } justify={ 'between' }>
                    <SubmitButton>Submit</SubmitButton>
                    <SelectLanguage />
                </Flex>
            </form>
        </Container>
    );
}