'use client';

import * as htmlToImage from 'html-to-image';

import { Box, Container, Flex, Heading, IconButton, Tooltip } from '@radix-ui/themes';
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbBoxMargin } from "react-icons/tb";
import { RxFontFamily, RxWidth, RxCopy, RxShare1 } from "react-icons/rx";
import { useRef, useState } from 'react';

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

    const handleClick = async () => {

        if (!codeRef.current) return;

        const result = await htmlToImage.toPng(codeRef.current, { cacheBust: false });
    }

    // Toggle the auto width state that controls the width of the snippet container.
    const toggleAutoWidth = () => setAutoWidth(!autoWidth);

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
                            <IconButton variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                                <TbBoxMargin size={ '1.25rem' }/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip content={ 'Content Width' }>
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
                        <Box ref={ codeRef } className={ `${ !autoWidth && 'w-full' }` } dangerouslySetInnerHTML={{ __html: text }} />
                    </Flex>
                </Box>
            </Flex>
        </Container>
    )
}