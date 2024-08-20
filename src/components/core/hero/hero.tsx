import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';
import { codeToHtml } from 'shiki';
import { FaArrowRight } from "react-icons/fa";
import { HeroImage } from './hero-image';
import Link from 'next/link';

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
            <Box position={ 'absolute' } className={ 'lg:hidden z-10 w-full h-dvh bg-opacity-15 backdrop-blur-sm' } />
            <Flex direction={ 'column' } className={ 'w-full px-6 sm:px-24 max-w-[47rem] z-20 justify-center relative' }>
                <Heading size={ { initial: '8', sm: '9' } } weight={ 'medium' }>Start sharing</Heading>
                <Heading size={ { initial: '8', sm: '9' } } weight={ 'medium' }>your code now</Heading>
                <Text size={ { initial: '2', sm: '5' } } color={ 'gray' } weight={ 'bold' } className={ 'mt-3' }>
                    A modern pastebin application that lets you generate stunning images of formatted snippets effortlessly. Just paste, style, and share—no setup needed.
                </Text>
                <Box className={ 'mt-4 mb-4' } dangerouslySetInnerHTML={ { __html: highlightSnippet } }/>
                <Flex className={ 'gap-4' }>
                    <Button asChild className={ 'mt-4 flex-1 cursor-pointer' } size={ { initial: '3', sm: '4' } } variant={ 'soft' }>
                        <Link href={ '/s' }>
                            <Text>Get Started</Text>
                            <FaArrowRight />
                        </Link>
                    </Button>
                    <Button className={ 'mt-4 flex-1 cursor-pointer' } size={ { initial: '3', sm: '4' } } variant={ 'surface' }>
                        <Text>{ `What's New?` }</Text>
                    </Button>
                </Flex>
            </Flex>
            <HeroImage />
        </Flex>
    );
}