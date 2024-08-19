import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';
import { codeToHtml } from 'shiki';
import { FaArrowRight } from "react-icons/fa";
import { HeroImage } from './hero-image';

export const Hero = async () => {

    const exampleCode = `const sum = (a, b) => {
  return a + b;
}

// Example usage:
console.log(sum(3, 5)); // Output: 8`

    const highlightSnippet = await codeToHtml(exampleCode, {
        lang: 'jsx',
        theme: 'dracula',
    });

    return (
        <Flex className={ 'min-h-full relative items-center overflow-hidden' } gap={ '6' }>
            <Flex direction={ 'column' } className={ 'w-full px-6 sm:px-12 max-w-[37rem] z-50 justify-center relative' }>
                <Box position={ 'absolute' } className={ '-z-10 w-full h-dvh bg-opacity-15 backdrop-blur-sm' } />
                <Heading size={ { initial: '8', sm: '9' } } weight={ 'medium' }>Start sharing</Heading>
                <Heading size={ { initial: '8', sm: '9' } } weight={ 'medium' }>your code now</Heading>
                <Text size={ { initial: '2', sm: '5' } } color={ 'gray' } weight={ 'bold' } className={ 'mt-3' }>
                    A modern pastebin application that lets you generate stunning images of formatted snippets effortlessly. Just paste, style, and share—no setup needed.
                </Text>
                <Box className={ 'mt-4 mb-4' } dangerouslySetInnerHTML={ { __html: highlightSnippet } }/>
                <Flex className={ 'gap-4' }>
                    <Button className={ 'mt-4 flex-1 cursor-pointer' } size={ { initial: '3', sm: '4' } } variant={ 'soft' }>
                        Get Started
                        <FaArrowRight />
                    </Button>
                    <Button className={ 'mt-4 flex-1 cursor-pointer' } size={ { initial: '3', sm: '4' } } variant={ 'surface' }>What's New?</Button>
                </Flex>
            </Flex>
            <HeroImage />
        </Flex>
    );
}