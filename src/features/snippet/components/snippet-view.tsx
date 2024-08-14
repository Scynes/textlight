'use client';

import * as htmlToImage from 'html-to-image';

import { Box,Text, Container, DropdownMenu, Flex, Heading, IconButton, Slider, Tooltip } from '@radix-ui/themes';
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbBoxMargin } from "react-icons/tb";
import { RxFontFamily, RxWidth, RxCopy, RxShare1 } from "react-icons/rx";
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

interface Properties {
    // The title of the snippet
    title: string;
    // The text snippet to display
    text: string;
    // The (text) language of the snippet
    language: string;
}

export const SnippetView = ( { title, text, language }: Properties ) => {

    const codeRef = useRef(null);

    const [ autoWidth, setAutoWidth ] = useState<boolean>(false);

    const [ padding, setPadding ] = useState<number>(0);

    const handleClick = async () => {

        if (!codeRef.current) return;

        const result = await htmlToImage.toPng(codeRef.current, { cacheBust: false });
    }

    // Toggle the auto width state that controls the width of the snippet container.
    const toggleAutoWidth = () => setAutoWidth(!autoWidth);

    const handlePaddingChange = ( value: number[] ) => setPadding(value[0]);

    return (
        <Container size={ '3' }>
            <Flex flexGrow={ '1' } direction={ 'column' }>
                <Flex className={ 'mb-2' } justify={ 'between' } align={ 'end' }>
                    <Heading size={ '6' }>{ title }</Heading>
                    <Flex gap={ '1' } className={ 'rounded-md bg-[--gray-2] p-2' }>
                        <Tooltip content={ 'Background Color' }>
                            <IconButton variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                                <IoColorPaletteOutline size={ '1.25rem' }/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip content={ 'Font Family' }>
                            <IconButton variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                                <RxFontFamily size={ '1.25rem' }/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip content={ 'Content Padding' }>
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <IconButton variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                                        <TbBoxMargin size={ '1.25rem' }/>
                                    </IconButton>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content side='bottom'>
                                    <Flex direction={ 'column' } className={ 'w-40 p-2 gap-1' }>
                                        <Text>Padding: { padding * 4 }px</Text>
                                        <Slider size={ '1' } defaultValue={ [ padding ] } value={ [ padding ] } className={ 'w-full cursor-pointer' } max={ 9 } onValueChange={ handlePaddingChange } />
                                    </Flex>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        </Tooltip>
                        <Tooltip content={ 'Autofit Content' }>
                            <IconButton onClick={ toggleAutoWidth } variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                                <RxWidth size={ '1.25rem' }/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip content={ 'Copy Content' }>
                            <IconButton onClick={ toggleAutoWidth } variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                                <RxCopy size={ '1.25rem' }/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip content={ 'Share Content' }>
                            <IconButton onClick={ toggleAutoWidth } variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                                <RxShare1 size={ '1.25rem' }/>
                            </IconButton>
                        </Tooltip>
                    </Flex>
                </Flex>
                <Box p={ '4' } className={ 'bg-[--gray-2] rounded-md' }>
                    <Flex justify={ 'center' }>
                        <Box p={ padding.toString() } ref={ codeRef } className={ `transition-all ${ !autoWidth && 'w-full' } bg-red-300 max-w-full` } dangerouslySetInnerHTML={{ __html: text }} />
                    </Flex>
                </Box>
            </Flex>
        </Container>
    )
}