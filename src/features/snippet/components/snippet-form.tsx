'use client';

import { Box, Button, Container, Dialog, Flex, Heading, Text, TextArea, TextField } from '@radix-ui/themes';
import { submitSnippet } from '@/features/snippet/actions/submit-snippet';
import { SubmitButton } from '@/features/snippet/components/submit-button';
import { SelectLanguage } from '@/features/snippet/components/select-language';
import { SnippetSettings } from '@/features/snippet/components/snippet-settings';
import { useFormState } from 'react-dom';
import { GiCheckMark } from 'react-icons/gi';
import { FaRegCopy } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const SnippetForm = () => {

    const [ state, action ] = useFormState(submitSnippet, null);

    const [ redirecting, setRedirecting ] = useState<boolean>(false);

    const copyContent = () => {
        navigator.clipboard.writeText(`https://textlight.vercel.app/s/${ state?.link }`);
        toast.success('Link copied to clipboard!', { position: 'bottom-right', theme: 'dark' });
    }

    return (
        <Box className={ 'w-full' }>
            <Container size={ '3' }>
                <form action={ action } className={ 'flex gap-4 flex-col' }>
                    <Flex gap={ '4' } className={ 'flex-col sm:flex-row' }>
                        <TextField.Root name={ 'title' } placeholder={ 'Title' } className={ 'w-full' } size={ '3' } autoComplete={ 'off' } maxLength={ 28 }/>
                        <SelectLanguage />
                    </Flex>
                    <TextArea name={ 'text' } size={ '3' } rows={ 15 } />
                    <Flex gap={ '4' } className={ 'flex-col sm:flex-row ' }>
                        <SnippetSettings />
                        <SubmitButton>Submit</SubmitButton>
                    </Flex>
                </form>
            </Container>
            <Dialog.Root open={ state?.success }>
                <Dialog.Content className={ 'max-w-[360px] flex flex-col items-center p-5' }>
                    <Box>
                        <GiCheckMark size={ '3rem' } className={ 'p-2 rounded-full bg-[--accent-5] mb-4' } />
                    </Box>
                    <Heading size={ '5' }>Snippet Generated!</Heading>
                    <Text className={ '' }>Feel free to share it with others.</Text>
                    <Flex gap={ '2' } className={ 'w-full mt-3' }>
                        <Button className={ 'flex-1' } variant={ 'soft' } onClick={ copyContent }>
                            <FaRegCopy size={ '1rem' } />
                            Copy Link
                        </Button>
                        <Button asChild className={ 'flex-1' } variant={ 'soft' } onClick={ () => setRedirecting(true) } disabled={ redirecting }>
                            <Link href={ `/s/${ state?.link }` }>
                                <IoEnterOutline size={ '1.5rem' } />
                                View Snippet
                            </Link>
                        </Button>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </Box>
    );
}