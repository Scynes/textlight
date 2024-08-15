'use client';

import * as htmlToImage from 'html-to-image';

import { Box,Text, Container, Flex, Heading, IconButton, Slider, Tooltip, Popover, SegmentedControl } from '@radix-ui/themes';
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbBoxMargin } from "react-icons/tb";
import { RxFontFamily, RxWidth, RxShare1, RxCamera } from "react-icons/rx";
import { useEffect, useRef, useState } from 'react';
import { CirclePicker } from 'react-color';
import GradientPicker, { useColorPicker } from 'react-best-gradient-color-picker';
import { CopyButton } from '@/features/snippet/components/toolbar/copy-button';

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

    const [ autoWidth, setAutoWidth ] = useState<boolean>(false);

    const [ padding, setPadding ] = useState<number>(4);

    const [ solidColor, setSolidColor ] = useState<string>('#f9f9f9');

    const [gradientColor, setGradientColor] = useState('linear-gradient(200deg, rgb(15, 15, 245) 0%, rgb(195, 95, 48) 100%)');

    const [ paletteTab, setPaletteTab ] = useState<'solid' | 'gradient' | 'image'>('solid');

    const { isGradient, setDegrees } = useColorPicker(gradientColor, setGradientColor);

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
    const toggleAutoWidth = () => setAutoWidth(!autoWidth);

    // Handle the padding change for the snippet container.
    const handlePaddingChange = ( value: number[] ) => setPadding(value[0]);

    // Handle the background color change for the snippet container.
    const handleSolidColorChange = ( color: any ) => setSolidColor(color.hex);

    return (
        <Container size={ '3' }>
            <Flex flexGrow={ '1' } direction={ 'column' }>
                <Flex className={ 'mb-2 flex-col sm:flex-row' } justify={ 'between' }>
                    <Heading size={ '6' } className={ 'sm:self-end sm:mb-2' }>{ title }</Heading>
                    <Flex gap={ '1' } className={ 'rounded-md bg-[--gray-2] p-2' }>
                        <Popover.Root>
                            <Tooltip content={ 'Background Color' }>
                                <Popover.Trigger>
                                    <IconButton variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                                        <IoColorPaletteOutline size={ '1.25rem' }/>
                                    </IconButton>
                                </Popover.Trigger>
                            </Tooltip>
                            <Popover.Content>
                                <SegmentedControl.Root value={ paletteTab } defaultValue={ paletteTab } className={ 'mb-4 w-full' }>
                                    <SegmentedControl.Item onClick={ () => setPaletteTab('solid') } value={ 'solid' }>Solid</SegmentedControl.Item>
                                    <SegmentedControl.Item onClick={ () => setPaletteTab('gradient') } value={ 'gradient' }>Gradient</SegmentedControl.Item>
                                    <SegmentedControl.Item onClick={ () => setPaletteTab('image') } value={ 'image' } aria-disabled>Image</SegmentedControl.Item>
                                </SegmentedControl.Root>
                                <Flex justify={ 'center' }>
                                    { paletteTab === 'solid' && <CirclePicker color={ solidColor } onChange={ handleSolidColorChange } /> }
                                    { paletteTab === 'gradient' && <GradientPicker value={ gradientColor } onChange={ setGradientColor } hideColorTypeBtns hideControls hideOpacity /> }
                                </Flex>
                            </Popover.Content>
                        </Popover.Root>
                        <Tooltip content={ 'Font Family' }>
                            <IconButton variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                                <RxFontFamily size={ '1.25rem' }/>
                            </IconButton>
                        </Tooltip>
                            <Popover.Root>
                                <Tooltip content={ 'Content Padding' }>
                                    <Popover.Trigger>
                                        <IconButton variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                                            <TbBoxMargin size={ '1.25rem' }/>
                                        </IconButton>
                                    </Popover.Trigger>
                                </Tooltip>
                                <Popover.Content side='bottom'>
                                    <Flex direction={ 'column' } className={ 'w-40 gap-1' }>
                                        <Text>Padding: { padding * 4 }px</Text>
                                        <Slider size={ '1' } defaultValue={ [ padding ] } value={ [ padding ] } className={ 'w-full cursor-pointer' } max={ 9 } onValueChange={ handlePaddingChange } />
                                    </Flex>
                                </Popover.Content>
                            </Popover.Root>
                        <Tooltip content={ 'Autofit Content' }>
                            <IconButton onClick={ toggleAutoWidth } variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                                <RxWidth size={ '1.25rem' }/>
                            </IconButton>
                        </Tooltip>
                        <CopyButton text={ text } />
                        <Tooltip content={ 'Share Content' }>
                            <IconButton variant={ 'soft' } className={ 'cursor-pointer' } color={ 'gray' }>
                                <RxShare1 size={ '1.25rem' }/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip content={ 'Export Image' }>
                            <IconButton onClick={ exportImage } variant={ 'soft' } className={ 'cursor-pointer' } color={ 'amber' }>
                                <RxCamera size={ '1.25rem' }/>
                            </IconButton>
                        </Tooltip>
                    </Flex>
                </Flex>
                <Box p={ '4' } className={ 'bg-[--gray-2] rounded-md' }>
                    <Flex justify={ 'center' }>
                        <Box style={ { background: padding > 0 ? paletteTab == 'solid' ? solidColor : gradientColor : undefined } } p={ padding.toString() } ref={ codeRef } className={ `transition-all ${ !autoWidth && 'w-full' } max-w-full` } dangerouslySetInnerHTML={{ __html: formattedText }} />
                    </Flex>
                </Box>
            </Flex>
        </Container>
    )
}