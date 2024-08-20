'use client';

import * as htmlToImage from 'html-to-image';

import { Box,Text, Container, Flex, Heading, IconButton, Slider, Tooltip, Popover, SegmentedControl } from '@radix-ui/themes';
import { IoColorPaletteOutline } from "react-icons/io5";

import { TbBoxMargin } from "react-icons/tb";
import { RxFontFamily, RxWidth, RxCamera } from "react-icons/rx";
import { useEffect, useRef, useState } from 'react';
import { CirclePicker } from 'react-color';
import GradientPicker, { useColorPicker } from 'react-best-gradient-color-picker';
import { CopyContentButton } from '@/features/snippet/components/toolbar/copy-content-button';
import { CopyLinkButton } from './toolbar/copy-link-button';

interface Properties {
    // The title of the snippet
    title: string;
    // The raw text.
    text: string;
    // The formatted text in HTML.
    formattedText: string;
    // The (text) language of the snippet
    language: string;
}

export const SnippetView = ( { title, text, formattedText, language }: Properties ) => {

    const codeRef = useRef(null);

    const [snippetStyles, setSnippetStyles] = useState({
        autoWidth: false,
        padding: 0,
        solidColor: '#f9f9f9',
        gradientColor: 'linear-gradient(200deg, rgb(15, 15, 245) 0%, rgb(195, 95, 48) 100%)',
        paletteTab: 'solid' as 'solid' | 'gradient' | 'image',
    });

    const { isGradient, setDegrees } = useColorPicker(snippetStyles.gradientColor, (color) => setSnippetStyles({ ...snippetStyles, gradientColor: color }));

    useEffect(() => {
        setDegrees(200);
    }, []);

    const exportImage = async () => {

        if (!codeRef.current) return;

        const result = await htmlToImage.toPng(codeRef.current, { cacheBust: false });

        const link = document.createElement("a");

        link.download = `${ title }.png`;
        link.href = result;
        link.click();
    }

    // Toggle the auto width state that controls the width of the snippet container.
    const toggleAutoWidth = () => setSnippetStyles(prev => ({ ...prev, autoWidth: !prev.autoWidth }));

    // Handle the padding change for the snippet container.
    const handlePaddingChange = (value: number[]) => setSnippetStyles(prev => ({ ...prev, padding: value[0] }));

    // Handle the background color change for the snippet container.
    const handleSolidColorChange = (color: any) => setSnippetStyles(prev => ({ ...prev, solidColor: color.hex }));

    const setPaletteTab = (tab: 'solid' | 'gradient' | 'image') => setSnippetStyles(prev => ({ ...prev, paletteTab: tab }));

    return (
        <Container size={ '3' }>
            <Flex flexGrow={ '1' } direction={ 'column' }>
                <Flex className={ 'mb-2 flex-col sm:flex-row' } justify={ 'between' }>
                    <Heading size={ '6' } className={ 'sm:self-end sm:mb-2' }>
                        { title || 'Untitled' }
                    </Heading>
                    <Flex gap={ '1' } className={ 'rounded-md bg-[--gray-2] p-2' }>
                        <Popover.Root>
                            <Tooltip content={ 'Background Color' }>
                                <Popover.Trigger>
                                    <IconButton variant={ 'soft' } className={ 'transition-all active:scale-95 cursor-pointer' } color={ 'gray' }>
                                        <IoColorPaletteOutline size={ '1.25rem' }/>
                                    </IconButton>
                                </Popover.Trigger>
                            </Tooltip>
                            <Popover.Content>
                                <SegmentedControl.Root value={ snippetStyles.paletteTab } defaultValue={ snippetStyles.paletteTab } className={ 'mb-4 w-full' }>
                                    <SegmentedControl.Item onClick={ () => setPaletteTab('solid') } value={ 'solid' }>Solid</SegmentedControl.Item>
                                    <SegmentedControl.Item onClick={ () => setPaletteTab('gradient') } value={ 'gradient' }>Gradient</SegmentedControl.Item>
                                    <SegmentedControl.Item onClick={ () => setPaletteTab('image') } value={ 'image' } aria-disabled>Image</SegmentedControl.Item>
                                </SegmentedControl.Root>
                                <Flex justify={ 'center' }>
                                    { snippetStyles.paletteTab === 'solid' && <CirclePicker color={ snippetStyles.solidColor } onChange={ handleSolidColorChange } /> }
                                    { snippetStyles.paletteTab === 'gradient' && <GradientPicker value={ snippetStyles.gradientColor } onChange={ (color) => setSnippetStyles({ ...snippetStyles, gradientColor: color }) } hideColorTypeBtns hideControls hideOpacity /> }
                                </Flex>
                            </Popover.Content>
                        </Popover.Root>
                        <Tooltip content={ 'Font Family' }>
                            <IconButton variant={ 'soft' } className={ 'transition-all enabled:active:scale-95 cursor-pointer' } color={ 'gray' } disabled>
                                <RxFontFamily size={ '1.25rem' }/>
                            </IconButton>
                        </Tooltip>
                            <Popover.Root>
                                <Tooltip content={ 'Content Padding' }>
                                    <Popover.Trigger>
                                        <IconButton variant={ 'soft' } className={ 'transition-all active:scale-95 cursor-pointer' } color={ 'gray' }>
                                            <TbBoxMargin size={ '1.25rem' }/>
                                        </IconButton>
                                    </Popover.Trigger>
                                </Tooltip>
                                <Popover.Content side='bottom'>
                                    <Flex direction={ 'column' } className={ 'w-40 gap-1' }>
                                        <Text>Padding: { snippetStyles.padding * 4 }px</Text>
                                        <Slider size={ '1' } defaultValue={ [ snippetStyles.padding ] } value={ [ snippetStyles.padding ] } className={ 'transition-all active:scale-95 w-full cursor-pointer' } max={ 9 } onValueChange={ handlePaddingChange } />
                                    </Flex>
                                </Popover.Content>
                            </Popover.Root>
                        <Tooltip content={ 'Autofit Content' }>
                            <IconButton onClick={ toggleAutoWidth } variant={ 'soft' } className={ 'transition-all active:scale-95 cursor-pointer' } color={ 'gray' }>
                                <RxWidth size={ '1.25rem' }/>
                            </IconButton>
                        </Tooltip>
                        <CopyContentButton text={ text } />
                        <CopyLinkButton />
                        <Tooltip content={ 'Export Image' }>
                            <IconButton onClick={ exportImage } variant={ 'soft' } className={ 'transition-all active:scale-95 cursor-pointer' } color={ 'amber' }>
                                <RxCamera size={ '1.25rem' }/>
                            </IconButton>
                        </Tooltip>
                    </Flex>
                </Flex>
                <Box p={ '2' } className={ 'bg-[--gray-2] rounded-md' }>
                    <Flex justify={ 'center' }>
                        <Box style={ { background: snippetStyles.padding > 0 ? snippetStyles.paletteTab == 'solid' ? snippetStyles.solidColor : snippetStyles.gradientColor : undefined } } p={ snippetStyles.padding.toString() } ref={ codeRef } className={ `transition-all ${ !snippetStyles.autoWidth && 'w-full' } max-w-full` }>
                            <Box dangerouslySetInnerHTML={ { __html: formattedText } } className={ `${ snippetStyles.padding > 0 && 'shadow-[0_.5rem_1rem_.25rem_rgba(0,0,0,0.4)]' } rounded-md` }/>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Container>
    )
}