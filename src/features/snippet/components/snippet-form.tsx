'use client';

import { Box, Container, Flex, Text, TextArea, TextField } from '@radix-ui/themes';
import { submitSnippet } from '@/features/snippet/actions/submit-snippet';
import { SubmitButton } from '@/features/snippet/components/submit-button';
import { SelectLanguage } from './select-language';
import { IoChevronDown, IoChevronUp, IoSettingsSharp } from "react-icons/io5";
import { useState } from 'react';

export const SnippetForm = () => {

    const [ settingsOpen, setSettingsOpen ] = useState(false);

    return (
        <Box className={ 'w-full' }>
            <Container size={ '3' }>
                <form action={ submitSnippet } className={ 'flex gap-4 flex-col' }>
                    <Flex gap={ '4' } className={ 'flex-col sm:flex-row' }>
                        <TextField.Root name={ 'title' } placeholder={ 'Title' } className={ 'w-full' } size={ '3' } />
                        <SelectLanguage />
                    </Flex>
                    <TextArea name={ 'text' } size={ '3' } rows={ 15 } />
                    <Flex direction={ 'column' } className={ 'rounded-md border border-[--gray-7]' }>
                        <Flex onClick={ () => setSettingsOpen(!settingsOpen) } className={ `transition-all w-full h-10 cursor-pointer px-4 select-none hover:text-[--gray-10]` } align={ 'center' } justify={ 'between' }>
                            <Flex align={ 'center' } gap={ '3' }>
                                <IoSettingsSharp />
                                <Text>Additional Options</Text>
                            </Flex>
                            <Flex>
                                { settingsOpen ? <IoChevronUp /> : <IoChevronDown /> }
                            </Flex>
                        </Flex>
                        <Flex className={ `transition-all ${ settingsOpen ? 'h-40 py-2 border-[--gray-7]' : 'border-transparent h-0' } flex-col border-t overflow-hidden px-4` }>
                            <Text>Settings</Text>
                            <Text>Settings</Text>
                            <Text>Settings</Text>
                        </Flex>
                    </Flex>
                    <SubmitButton>Submit</SubmitButton>
                </form>
            </Container>
        </Box>
    );
}