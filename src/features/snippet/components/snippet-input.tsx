import { TextArea } from '@radix-ui/themes';
import { SubmitButton } from './submit-button';
import { submitSnippet } from '../actions/submit-snippet';

export const SnippetInput = () => {
    return (
        <form action={ submitSnippet } className={ 'h-full' }>
            <TextArea name={ 'text' } size={ '3' } className={ 'max-h-80 h-full max-w-xl w-full mb-4' }/>
            <SubmitButton>Submit</SubmitButton>
        </form>
    );
}